let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}ππππππππ πΌ πΌππππππ ππΌππΌ πΏπππ½πΌπππΌπ\nπππππππ\n*${usedPrefix + command} @tag*\n\nππΌπ πππππππ ππ πππ½πΌπ\nπππΌππππ\n*${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg}ππππππππ πΌ πΌππππππ ππΌππΌ πΏπππ½πΌπππΌπ\nπππππππ\n*${usedPrefix + command} @tag*\n\nππΌπ πππππππ ππ πππ½πΌπ\nπππΌππππ\n*${usedPrefix + command} @tag*`
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `${eg}ππ/ππΌ ππππΌπππ(πΌ) πππ πΏπππ½πΌπππΌπΏπ(πΌ) π€©\nπππΏππΌ πππΌπ πΌ ${gt}\n\nπππ ππππ ππΌπ πππ½πΌπ π€ \nπππ πππππ-πππ`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.group = true
handler.admin = true 
export default handler
