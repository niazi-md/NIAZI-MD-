/**
 * NIAZI-MD WhatsApp Bot
 * Developer: HACKER-NIAZI
 * Language: Node.js (Baileys)
 */

const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require("@whiskeysockets/baileys");
const P = require("pino");
const fs = require("fs");
const path = require("path");
const config = require("./config");

// 📁 Load all commands from './commands'
const { commands } = require("./lib/command");

// 🧠 Main bot function
async function NIAZI_MD() {
  const { state, saveCreds } = await useMultiFileAuthState("./session");
  const sock = makeWASocket({
    logger: P({ level: "silent" }),
    printQRInTerminal: true,
    auth: state,
    browser: ["NIAZI-MD", "Chrome", "1.0.0"],
  });

  // ✅ Connection update handler
  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      const reason = lastDisconnect?.error?.output?.statusCode;
      if (reason === DisconnectReason.loggedOut) {
        console.log("❌ Logged out. Please scan again.");
      } else {
        console.log("🔁 Reconnecting...");
        NIAZI_MD();
      }
    } else if (connection === "open") {
      console.log("✅ Connected successfully to WhatsApp!");
    }
  });

  // 📨 Message handler
  sock.ev.on("messages.upsert", async (m) => {
    try {
      const msg = m.messages[0];
      if (!msg.message) return;

      const from = msg.key.remoteJid;
      const type = Object.keys(msg.message)[0];
      const text =
        type === "conversation"
          ? msg.message.conversation
          : type === "extendedTextMessage"
          ? msg.message.extendedTextMessage.text
          : "";

      if (!text.startsWith(config.PREFIX)) return;
      const [cmdName, ...args] = text.slice(config.PREFIX.length).trim().split(/ +/);
      const cmd = commands.find((c) => c.pattern === cmdName.toLowerCase());

      if (cmd) {
        await cmd.function(sock, msg, args);
      }
    } catch (err) {
      console.log("❗Error:", err);
    }
  });

  // 🧾 Save creds on updates
  sock.ev.on("creds.update", saveCreds);
}

NIAZI_MD();
