import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix }) => {
if (!text) throw `${mg}πππΎπππ½πΌ ππ ππππ½ππ π ππππππ\nπππππππ\n*${usedPrefix + command} Billie Eilish - Bellyache*\n\nπππππ πππ ππΌππ ππ πππππ\nπππΌππππ\n*${usedPrefix + command} Billie Eilish - Bellyache*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `${eg}ππππππ ππ πππππππ ππ πΌππΏππ πππ ππΌπππ\n\nππΌππ πΌ ππππππ πππ πππ πΌππΏππ ππππΌππ`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'πππππ-πππ | SHINA BOT',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `Soon`}}}) 
  
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)
//https://leyscoders-api.herokuapp.com/api/playmp3?q=lebih%20baik%20darinya&apikey=Your_Key
  //("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `${eg}ππππππ ππ πππππππ ππ πππΏππ πππ ππΌπππ\n\nππΌππ πΌ ππππππ πππ πππ πππΏππ ππππΌππ`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'πππππ-πππ | SHINA BOT',
body: 'VIOLAME ONICHAN- WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `Soon}}})
  
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text) 
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `${wm}`, m)}
}catch(e){
m.reply(`${fg}πππππππ πΏπ πππππ\nπππ πΌππΌππ`)
console.log(e)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
