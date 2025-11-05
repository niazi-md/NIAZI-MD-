/**
 * ======================================================
 * 💥 NIAZI-MD — COMMAND SYSTEM CORE FILE 💥
 * ======================================================
 *  Developer: HACKER NIAZI
 *  GitHub: https://github.com/HACKER-NIAZI/NIAZI-MD
 *  Channel: https://whatsapp.com/channel/0029Vb6aq4cCHDygiEqJZl0S
 * ======================================================
 */

var commands = [];

/**
 * 🔹 Register a command for NIAZI-MD Bot
 * @param {Object} info - Command details (name, desc, category, etc.)
 * @param {Function} func - Command logic/function
 */
function cmd(info, func) {
    var data = info;
    data.function = func;
    if (!data.dontAddCommandList) data.dontAddCommandList = false;
    if (!info.desc) info.desc = '';
    if (!data.fromMe) data.fromMe = false;
    if (!info.category) data.category = 'misc';
    if (!info.filename) data.filename = "Not Provided";
    commands.push(data);
    return data;
}

/**
 * 🔸 Exporting NIAZI-MD command utilities
 */
module.exports = {
    cmd,
    AddCommand: cmd,
    Function: cmd,
    Module: cmd,
    commands,
};

/**
 * ======================================================
 * ⚠️ Note:
 * Use responsibly — misuse can lead to account bans.
 * © 2025 NIAZI-MD — All Rights Reserved
 * ======================================================
 */
