import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}πππ πΎπππΌππΏππ πΏπ ππππΎππππ ππππΌπ πΏπππΌπΎππππΌπΏππ πππ *#on stickers* ππΌππΌ πΌπΎππππΌπ\n\nπππ ππππΎππππ πΎππππΌππΏπ πΌππ πΏπππΌπ½πππΏ πππ *#on stickers* ππ πππΌπ½ππ`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
 
let nombre = 'πππππ-πππ'
let nombre2 = 'πππππ-πππ'
 
const s = [
'https://c.tenor.com/BBNrRQkKdcUAAAAi/anime.gif',
'https://c.tenor.com/OHMxfMcU4eQAAAAi/anime-girl.gif',  
'https://c.tenor.com/7nadUsiwZioAAAAd/satanichia-gabriel-dropout.gif',
'https://c.tenor.com/Gr6Z_6lBm2kAAAAd/satania-satanichia.gif',
'https://i.pinimg.com/originals/e4/f7/a2/e4f7a2ca99c568e64c1d41f2a61133eb.jpg',  
'https://i.pinimg.com/474x/b0/62/3f/b0623f46719f73be8b2d65357d8e30b2.jpg',
'https://i.pinimg.com/736x/e4/df/2d/e4df2d77375455726233c66882e5e0e7.jpg',
'https://i.pinimg.com/236x/2b/c2/fa/2bc2fa0191d01026d9797091d1ba5b2f.jpg' 
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(5 * 5000)
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
}
handler.customPrefix = /piensa|pensarΓ©|pensΓ³|π€/i 
handler.command = new RegExp
handler.exp = 50
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))