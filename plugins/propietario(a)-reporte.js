let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}*๐๐จ๐๐ง๐๐๐ ๐๐ก ๐ง๐๐ฅ๐ค๐ง๐ฉ๐*\n\n*๐๐๐๐๐๐๐:*\n*${usedPrefix + command} el comando ${usedPrefix}infobot no funciona.*\n\n*๐๐ง๐๐ฉ๐ ๐ฉ๐๐ ๐ง๐๐ฅ๐ค๐ง๐ฉ*\n\n*๐๐๐ผ๐๐๐๐:*\n*${usedPrefix + command} the command ${usedPrefix}owner it does not work.*`
if (text.length < 8) throw `${fg} โจ *Mรญnimo 10 caracteres para hacer El Reporte.*\n\nโจ *Minimum 10 characters to make the Report.*`
if (text.length > 1000) throw `${fg} ๐ผ *Mรกximo 1000 caracteres para hacer El Reporte.*\n\n๐ผ *Maximum 1000 characters to make the Report.*`
let teks = `*โญโโ[ ๐๐๐๐๐๐๐ | ๐๐๐๐๐๐ ]โโโโฌฃ*\n*โ*\n*โ* *๐๐๐๐๐๐ | ๐๐๐๐ฝ๐๐*\nโ โฆ Wa.me/${m.sender.split`@`[0]}\n*โ*\n*โ* *๐๐๐๐๐ผ๐๐ | ๐๐๐๐๐ผ๐๐*\n*โ* โฆ ${text}\n*โ*\n*โฐโโโโโโโโโโโโโโโโโโโฌฃ*`
//conn.reply('593968585383@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
//contextInfo: {
//mentionedJid: [m.sender]
//}})
conn.reply('51936448126@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`โฐโฑ๐โฑ *๐ฬ๐๐๐๐ | ๐๐๐พ๐พ๐๐๐* โฑ๐โฑโฎ\n\n*El reporte ha sido enviado a mรญ Creadora. Tendrรก una respuesta pronto. De ser Falso serรก Ignorado el reporte.*\n\n*The report has been sent to my Creator. You will have an answer soon. If false, the report will be ignored.*`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
