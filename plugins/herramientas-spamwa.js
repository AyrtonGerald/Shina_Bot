let handler = async (m, { conn, text, usedPrefix, command }) => {

let time = global.db.data.users[m.sender].lastrob + 7200000
if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `*β±οΈ ESPERA ${msToTime(time - new Date())}\n NO USER ESTE COMANDO CON UN MAL USO*`
let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw `${mg}πππππππ ππ ππππππ πΌπ πππ ππ ππ ππΌππΌ πππΌπ\n*β ${usedPrefix + command} numero|texto|cantidad*\nπππππππ\n*β ${usedPrefix + command} 999999999999|Holaaa|35*\n\nπππππ πππ ππππ½ππ ππ π½π πππΌπππΏ\n*β ${usedPrefix + command} number|text|amount*\nπππΌππππ\n*β ${usedPrefix + command} 999999999999|Hi!!|35*`
if (!pesan) throw `${mg}πππππππ ππ ππππππ πΌπ πππ ππ ππ ππΌππΌ πππΌπ\n*β ${usedPrefix + command} numero|texto|cantidad*\nπππππππ\n*β ${usedPrefix + command} 999999999999|Holaaa|35*\n\nπππππ πππ ππππ½ππ ππ π½π πππΌπππΏ\n*β ${usedPrefix + command} number|text|amount*\nπππΌππππ\n*β ${usedPrefix + command} 999999999999|Hi!!|35*`
if (jumlah && isNaN(jumlah)) throw `ππ πΎπΌππππΏπΌπΏ πΏππ½π πΏπ ππ ππ ππππππ πΌπ πππ ππ ππ ππΌππΌ πππΌπ\n*β ${usedPrefix + command} numero|texto|cantidad*\nπππππππ\n*β ${usedPrefix + command} 999999999999|Holaaa|35*\n\nπππππ πππ ππππ½ππ ππ π½π πππΌπππΏ\n*β ${usedPrefix + command} number|text|amount*\nπππΌππππ\n*β ${usedPrefix + command} 999999999999|Hi!!|35*`
await delay(10000)
let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
await delay(10000)
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 10) throw `${fg}ππππππ *10* πππππΌπππ ππΌππΌ ππΌπΎππ ππ πππΌπ\n\nπππππππ *10* πππππΌπππ ππ πππΌπ`
await delay(10000)
await m.reply(`${eg}ππ πππΌπ ππ πππππ *${fixedJumlah}* πππΎππ πΌ *${nomor}*\n\nπππ πππΌπ ππΌπ ππππ *${fixedJumlah}* πππππ ππ *${nomor}*`)
await delay(10000)
for (let i = fixedJumlah; i > 1; i--) {
await delay(10000)
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}
global.db.data.users[m.sender].lastrob = new Date * 1
}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.register = true
handler.level = 16
handler.limit = 60
export default handler 
const delay = time => new Promise(res => setTimeout(res, time))

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}
