import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}πππππππ ππ ππππΌπΎπ ππΌπππΏπ πΏπ πππΏππΌππππ.\n\nπππππ πΌ ππΌπππΏ πππΏππΌππππ ππππ.`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
${eg}
β π  *${gt} ${vs}*
ββββββββββββββββββ
β π« ππππ½ππ | ππΌππ
β ${filename}
ββββββββββββββββββ
β πͺ ππππ |  ππππ
β ${filesizeH}
ββββββββββββββββββ
β π ππππ | ππππ
β ${ext}`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'πππππ-πππ | SHINA GOD',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `Soon`}}})
  
let info = `ππΌπππ πΌ 150 ππ½ ππ πππππ½ππ πππ ππ ππ πππππ.

ππππΌπππ πππΌπ 150 ππ½ ππΌπ πππ π½π ππππ.`.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['πππ£πͺ πΏππ¨πππ§πππ¨ π', '#descargasmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ | ππͺπ‘π‘ πππ£πͺ β¨', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)  
  
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) { 
m.reply(`${lenguajeGB['smsAvisoFG']()}ππππππΌ πΌ πππππππΌπ. πΏππ½π πΏπ πππ ππ ππππΌπΎπ ππΌπππΏπ πΏπ πππΏππΌππππ.
ππππΌππ πππ πΌππΌππ. ππππ π½π πΌ ππΌπππΏ πππΏππΌππππ ππππ.`)
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.limit = 3
handler.exp = 100
export default handler
