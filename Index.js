// index.js
// NIAZI-MD — Express + Baileys pairing endpoints
const express = require('express');
const path = require('path');
const fs = require('fs');
const pino = require('pino');
const qrcode = require('qrcode');
const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// store latest pair data
let lastPairRaw = null;     // raw pair string (if Baileys gives)
let lastQrDataUrl = null;   // QR image data URL for /qr

async function startBot() {
  try {
    // ensure auth_info folder exists
    if (!fs.existsSync(path.join(__dirname, 'auth_info'))) {
      fs.mkdirSync(path.join(__dirname, 'auth_info'));
    }

    const { version } = await fetchLatestBaileysVersion().catch(()=>({ version: [2, 2203, 3] }));
    const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, 'auth_info'));

    const sock = makeWASocket({
      version,
      logger: pino({ level: 'silent' }),
      printQRInTerminal: false,
      auth: state
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', async (update) => {
      try {
        // update.qr may contain pairing string (raw)
        if (update.qr) {
          lastPairRaw = update.qr;
          lastQrDataUrl = await qrcode.toDataURL(update.qr);
          // save image to public/qr.png
          const base64 = lastQrDataUrl.replace(/^data:image\/png;base64,/, '');
          const publicDir = path.join(__dirname, 'public');
          if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
          fs.writeFileSync(path.join(publicDir, 'qr.png'), base64, 'base64');
          console.log('✅ Pair QR ready (saved to public/qr.png).');
        }
        if (update.connection === 'open') {
          console.log('✅ WhatsApp connected (Baileys).');
        }
        if (update.connection === 'close') {
          console.log('🔁 Connection closed', update.lastDisconnect || update);
        }
      } catch (e) {
        console.error('Connection update error', e);
      }
    });

    console.log('Bot started — waiting for pairing events (if needed).');
  } catch (err) {
    console.error('startBot error:', err);
  }
}

// Start bot in background
startBot();

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// show QR image if available
app.get('/qr', (req, res) => {
  if (lastQrDataUrl) {
    res.send(`<div style="text-align:center;font-family:Arial">
      <h3>Scan this QR with another phone</h3>
      <img src="${lastQrDataUrl}" style="max-width:360px;border-radius:8px"/>
    </div>`);
  } else {
    res.send('<p>QR not ready yet. Check bot logs or refresh after few seconds.</p>');
  }
});

// return raw pair string (JSON) — for pair.html fetching
app.get('/paircode', (req, res) => {
  if (lastPairRaw) return res.json({ ok: true, code: lastPairRaw });
  return res.json({ ok: false, code: null });
});

// simple health
app.get('/health', (req, res) => res.json({ ok: true, bot: 'NIAZI-MD' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 NIAZI-MD running on port ${PORT}`));
