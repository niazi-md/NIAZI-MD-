/**
 * 🌐 NIAZI-MD WhatsApp Bot Config File
 * Made by HACKER-NIAZI
 * Safe | Clean | Deployable
 */

const fs = require('fs');
const path = require('path');

const config = {
    // ============================
    // ⚙️ BASIC SETTINGS
    // ============================
    ownerName: "HACKER NIAZI",
    botName: "NIAZI-MD",
    prefix: ".",
    sessionId: process.env.SESSION_ID || "",

    // ============================
    // 🌍 DEPLOYMENT SETTINGS
    // ============================
    version: "1.0.0",
    author: "NIAZI-MD",
    autoReconnect: true,

    // ============================
    // 🧠 BOT BEHAVIOR
    // ============================
    autoRead: true,       // automatically mark messages as read
    autoTyping: false,    // show typing while responding
    replyPrivate: false,  // only reply in groups or all chats

    // ============================
    // 🧾 MESSAGE TEMPLATES
    // ============================
    messages: {
        success: '✅ Done!',
        error: '⚠️ Something went wrong!',
        admin: '❌ This command is for *Admins* only.',
        owner: '🧠 This command is for *Owner* only.',
        group: '👥 Use this command in group chats only.',
        private: '💬 This command works only in private chat.',
        wait: '⏳ Please wait...',
    },

    // ============================
    // 💾 PATHS
    // ============================
    database: path.join(__dirname, 'database.json'),
    commandsDir: path.join(__dirname, 'commands'),

    // ============================
    // 📡 API KEYS (if any)
    // ============================
    api: {
        openaiKey: process.env.OPENAI_API_KEY || "",
        removeBgKey: process.env.REMOVE_BG_KEY || "",
    },

    // ============================
    // 🖼️ MEDIA / BRANDING
    // ============================
    logo: fs.existsSync('./NIAZI/logo.jpg') ? fs.readFileSync('./NIAZI/logo.jpg') : null,
    footer: "© NIAZI-MD 2025",
    themeEmoji: "💠",
};

// Export config globally
module.exports = config;
