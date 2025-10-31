// index.js — NIAZI-MD pairing + web UI server (Heroku ready)
const express = require('express');
const path = require('path');
const fs = require('fs');
const qrcode = require('qrcode');
const pino = require('pino');

const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// variables to hold pairing string / qr image
let lastPairRaw = null;      // raw pairing string (text)
let lastPairDataUrl = null;  // data:image/png;base64,...

async function startBot() {
  try {
    // get latest baileys version for compatibility (optional)
    let versionInfo = {};
    try {
      versionInfo = await fetchLatestBaileysVersion();
    } catch (e) {
      // ignore if fetch fails — Baileys will use defaults
      versionInfo = {};
    }

    const { state, saveCreds } = await useMultiFileAuthState('./auth_info');

    const sock = makeWASocket({
      version: versionInfo.version || undefined,
      printQRInTerminal: false,
      logger: pino({ level: 'silent' }),
      auth: state
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', async (update) => {
      // Some baileys versions provide update.qr (full pairing string)
      // Newer multi-device might provide update.pairingCode or update.qr
      try {
        if (update.qr) {
          lastPairRaw = update.qr;
          lastPairDataUrl = await qrcode.toDataURL(update.qr);
          console.log('✅ Pair QR ready (update.qr)');
          saveQrImage(lastPairDataUrl);
        } else if (update.pairingCode) {
          // some versions use pairingCode (short)
          lastPairRaw = update.pairingCode;
          lastPairDataUrl = await qrcode.toDataURL(update.pairingCode);
          console.log('✅ Pair code ready (update.pairingCode)');
          saveQrImage(lastPairDataUrl);
        } else if (update.qr_string) {
          lastPairRaw = update.qr_string;
          lastPairDataUrl = await qrcode.toDataURL(update.qr_string);
          console.log('✅ Pair qr_string ready');
          saveQrImage(lastPairDataUrl);
        }
      } catch (err) {
        console.error('QR generation error:', err);
      }

      if (update.connection === 'open') {
        console.log('✅ WhatsApp connected!');
      } else if (update.connection === 'close') {
        console.log('🔁 Connection closed', update.lastDisconnect || update);
      }
    });

  } catch (err) {
    console.error('Failed to start bot:', err);
  }
}

function saveQrImage(dataUrl) {
  try {
    const base64 = dataUrl.replace(/^data:image\/png;base64,/, '');
    if (!fs.existsSync(path.join(__dirname, 'public'))) fs.mkdirSync(path.join(__dirname, 'public'));
    fs.writeFileSync(path.join(__dirname, 'public', 'pair.png'), base64, 'base64');
  } catch (e) {
    console.error('saveQrImage error', e);
  }
}

// start bot (non-blocking)
startBot();

/* ----------------------
   Web Endpoints
   ---------------------- */

// serve main page (public/index.html must exist)
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

// serve pair UI (public/pair.html)
app.get('/pair', (req, res) => res.sendFile(path.join(__dirname, 'public', 'pair.html')));

// return raw pair text (for pair.html to fetch and display)
app.get('/pairtext', (req, res) => {
  if (lastPairRaw) return res.json({ ok: true, pair: lastPairRaw });
  return res.json({ ok: false, pair: null });
});

// return pair PNG image url (if wanted)
app.get('/pair.png', (req, res) => {
  const imgPath = path.join(__dirname, 'public', 'pair.png');
  if (fs.existsSync(imgPath)) return res.sendFile(imgPath);
  return res.status(404).send('No pair image yet.');
});

/* ----------------------
   Start server
   ---------------------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 NIAZI-MD web server running on port ${PORT}`));                );
                break;

            case "owner":
                await reply(`👑 *NIAZI-MD Owner:*
📞 +92 344 8166105
🌐 Channel: https://whatsapp.com/channel/0029VbBKWrA2v1Iu4KVE3A1H
👥 Group: https://chat.whatsapp.com/KJ6qs3H2xC6AQPYRTaNBNm?mode=wwt`);
                break;

            case "ping":
                await reply("🏓 Pong! Bot is active ✅");
                break;

            default:
                await reply("❓ Unknown Command! Type *.menu* to see list.");
        }
    });
}

startBot();
