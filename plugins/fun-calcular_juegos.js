let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}ππππππππ @ππΌπ π πππΎπππ½πΌ ππ ππππ½ππ\nππΌπ πππππππ @ππΌπ ππ ππππ πππ ππΌππ` 

if (command == 'gay2') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *GAY*_ π³οΈβπ`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

 // ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'lesbiana') { 
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_ π³οΈβπ`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'pajero') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_ ππ¦`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'pajera') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_ ππ¦`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'puto') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MΓS INFORMACIΓN A SU PRIVADO π₯π₯΅ XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'puta') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MΓS INFORMACIΓN A SU PRIVADO π₯π₯΅ XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

 // ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'manco') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} π©*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------  
  
if (command == 'manca') {
let juego = `_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} π©*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------ 
  
if (command == 'rata') {
let juego = `_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} π COME QUESO π§*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------   
  
if (command == 'prostituto') {
let juego = `_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} π«¦π, QUIEN QUIERE DE SUS SERVICIOS? XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------   
  
if (command == 'prostituta') {
let juego = `_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} π«¦π, QUIEN QUIERE DE SUS SERVICIOS? XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
 // ------------------------------------------------------------------------------------------------------------------------------------------------   
if (command == 'love') {
let juego = `*β€οΈβ€οΈ MEDIDOR DE AMOR β€οΈβ€οΈ*\n*_El amor de ${text.toUpperCase()} ES DE ${(500).getRandom()}% Deberias pedirle que sea tu  novia/o ?_*`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
//conn.sendHydrated(m.chat, juego, wm, null, md, 'πππππ-πππ', null, null, [
//['πππ£πͺ ππͺπππ€π¨ | πππ’ππ¨ πππ£πͺ π‘', '#juegosmenu'],
//['ππ©π§π π«ππ― | πΌππππ£ π€­', `${usedPrefix + command} ${text.toUpperCase()}`],
//['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
//], m, m.mentionedJid ? {
//mentions: m.mentionedJid
//} : {})} 
}
handler.help = ['love', 'gay2', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map(v => v + ' @tag | nombre')
handler.tags = ['calculator']
handler.command = /^love|gay2|lesbiana|pajero|pajera|puto|puta|manco|manca|rata|prostituta|prostituto/i
handler.exp = 100
export default handler
