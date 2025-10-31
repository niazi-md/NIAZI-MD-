/**
 * NIAZI-MD - WhatsApp Multi Device Bot
 * Owner: +92 344 8166105
 * Channel: https://whatsapp.com/channel/0029VbBKWrA2v1Iu4KVE3A1H
 * Group: https://chat.whatsapp.com/KJ6qs3H2xC6AQPYRTaNBNm?mode=wwt
 * Menu Image: https://i.ibb.co/gbbGmx3G/shaban-md.jpg
 */

import makeWASocket, {
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion
} from "@whiskeysockets/baileys";
import pino from "pino";
import fs from "fs";
import path from "path";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => res.send("🚀 NIAZI-MD Bot is Running!"));
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState("./auth_info");
    const { version } = await fetchLatestBaileysVersion();

    const niazi = makeWASocket({
        logger: pino({ level: "silent" }),
        printQRInTerminal: true,
        auth: state,
        browser: ["NIAZI-MD", "Safari", "1.0.0"],
        version
    });

    niazi.ev.on("creds.update", saveCreds);

    niazi.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === "close") {
            const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
            if (reason === DisconnectReason.badSession) {
                console.log("❌ Bad session, delete session and scan again");
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log("🔁 Connection closed, reconnecting...");
                startBot();
            } else if (reason === DisconnectReason.connectionLost) {
                console.log("❌ Connection lost, reconnecting...");
                startBot();
            } else if (reason === DisconnectReason.loggedOut) {
                console.log("❌ Logged out, delete session and scan again");
            } else {
                console.log("⚠️ Unknown disconnect reason, reconnecting...");
                startBot();
            }
        } else if (connection === "open") {
            console.log("✅ NIAZI-MD Connected Successfully!");
        }
    });

    niazi.ev.on("messages.upsert", async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message) return;

        const from = msg.key.remoteJid;
        const type = Object.keys(msg.message)[0];
        const body =
            type === "conversation"
                ? msg.message.conversation
                : type === "imageMessage"
                ? msg.message.imageMessage.caption
                : type === "videoMessage"
                ? msg.message.videoMessage.caption
                : type === "extendedTextMessage"
                ? msg.message.extendedTextMessage.text
                : "";

        const reply = (text) =>
            niazi.sendMessage(from, { text }, { quoted: msg });

        // Simple command system
        const prefix = ".";
        if (!body.startsWith(prefix)) return;
        const command = body.slice(1).trim().split(" ")[0].toLowerCase();

        switch (command) {
            case "alive":
                await reply(`╭───『 *NIAZI-MD* 』───╮
┃ 👑 *Owner:* +92 344 8166105
┃ 💬 *Status:* Online
┃ 🧠 *Prefix:* .
┃ 📅 *Date:* ${new Date().toLocaleDateString()}
┃ 🕒 *Time:* ${new Date().toLocaleTimeString()}
╰─────────────────╯`);
                break;

            case "menu":
                await niazi.sendMessage(
                    from,
                    {
                        image: { url: "https://i.ibb.co/gbbGmx3G/shaban-md.jpg" },
                        caption: `╭───『 *NIAZI-MD MENU* 』───╮
┃ 🌐 Channel: https://whatsapp.com/channel/0029VbBKWrA2v1Iu4KVE3A1H
┃ 👥 Group: https://chat.whatsapp.com/KJ6qs3H2xC6AQPYRTaNBNm?mode=wwt
┃ 👑 Owner: +92 344 8166105
┃ 🧠 Prefix: .
┃ ⚙️ Status: Online
┃ 📅 ${new Date().toLocaleDateString()}
┃ 🕒 ${new Date().toLocaleTimeString()}
╰─────────────────╯`
                    },
                    { quoted: msg }
                );
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
