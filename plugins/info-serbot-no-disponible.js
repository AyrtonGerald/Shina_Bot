import fs from 'fs'
//import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let pp = '๐๐๐๐๐-๐๐๐' //'./media/menus/Menu1.jpg'
//let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//try {
//pp = await conn.getProfilePicture(who)
//} catch (e) {

//} finally { }
  await m.reply(`โฐโฑโ ๏ธโฑ *๐ผ๐ฟ๐๐๐๐๐๐๐พ๐๐ผ | ๐๐ผ๐๐๐๐๐* โฑโ ๏ธโฑโฎ`)
  //conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['Menu', '/menu']], m)
let text = `
*Las funciones | The functions #jadibot #bots #serbot #subbot #getcode. No estan disponibles en | Are not available in* ${gt}`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '๐๐๐๐๐-๐๐๐ | ๐๐๐๐๐-๐๐๐',
body: 'Super Bot WhatsApp',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `${yt}`}}})  
  
  let info = `*Ya que no esta disponible el #serbot, Ahora podrรกs unir el Nรบmero de este Bot a tรบ Grupo de manera Temporal usando el comando*\n*#botemporal o #bottemporal*
  `.trim()
  
  await conn.sendHydrated(m.chat, info, wm, null, ig, '๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข', null, null, [
['๐พ๐ช๐๐ฃ๐ฉ๐๐จ ๐๐๐๐๐๐๐ก๐๐จ | ๐ผ๐๐๐ค๐ช๐ฃ๐ฉ๐จ โ', '/cuentasgb'],
['๐๐ง๐ช๐ฅ๐ค๐จ ๐๐๐๐๐๐๐ก๐๐จ | ๐๐ง๐ค๐ช๐ฅ๐จ ๐ฐ', '.grupos'],
['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ | ๐ฝ๐๐๐  ๐ฉ๐ค ๐๐๐ฃ๐ช โ๏ธ', '/menu']
], m,)
  
  //await conn.sendButton(m.chat, `Infรณrmate sobre las Novedades y recuerda tener la รบltima versiรณn.\nFind out about what's new and remember to have the latest version.`, author, url, [['๐ ๐๐ธ๐ถ๐๐ธ๐ด๐ฝ๐๐ด ๐', /${command}], ['๐ ๐๐ธ๐ถ๐๐ธ๐ด๐ฝ๐๐ด 2 ๐', /${command}]], m)
}
handler.command = /^(yafunka:3)/i
export default handler
