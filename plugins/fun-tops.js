import util from 'util'
import path from 'path' 


function handler(m, { groupMetadata, command, usedPrefix, conn }) {
   let user = a => '@' + a.split('@')[0] //'@' + a.split('@')[0]
   
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()

if (command == 'topgays') {
let vn = './media/gay2.mp3'
let top = `*ðTOP 10 GAYS/LESBIANAS DEL GRUPOð*
    
*_1.- ð³ï¸âð ${user(a)}_* ð³ï¸âð
*_2.- ðª ${user(b)}_* ðª
*_3.- ðª ${user(c)}_* ðª
*_4.- ð³ï¸âð ${user(d)}_* ð³ï¸âð
*_5.- ðª ${user(e)}_* ðª
*_6.- ðª ${user(f)}_* ðª
*_7.- ð³ï¸âð ${user(g)}_* ð³ï¸âð
*_8.- ðª ${user(h)}_* ðª
*_9.- ðª ${user(i)}_* ðª
*_10.- ð³ï¸âð ${user(j)}_* ð³ï¸âð`
m.reply(top, null, { mentions: conn.parseMention(top) })
//m.reply(top, null, {

//m.reply(conn.sendHydrated(m.chat, `*SON MUY GAYS!!* ð`, wm, null, md, 'ððððð-ððð', null, null, [
//['ðð©ð§ð ð«ðð¯ | ð¼ðððð£ ð®', `${usedPrefix + command}`],
//['ðð¤ð¡ð«ðð§ ðð¡ ððð£ðªÌ | ð½ððð  ð©ð¤ ððð£ðª âï¸', '/menu']
//], m))
   
//contextInfo: { 
//mentionedJid: [a, b, c, d, e, f, g, h, i, j]
//}})
conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })}
    
if (command == 'topotakus') {
let vn = './media/otaku.mp3'
let top = `*ð¸ TOP 10 OTAKUS DEL GRUPO ð¸*
    
*_1.- ð® ${user(a)}_* ð®
*_2.- ð· ${user(b)}_* ð·
*_3.- ð® ${user(c)}_* ð®
*_4.- ð· ${user(d)}_* ð·
*_5.- ð® ${user(e)}_* ð®
*_6.- ð· ${user(f)}_* ð·
*_7.- ð® ${user(g)}_* ð®
*_8.- ð· ${user(h)}_* ð·
*_9.- ð® ${user(i)}_* ð®
*_10.- ð· ${user(j)}_* ð·`
m.reply(top, null, { mentions: conn.parseMention(top) })
//m.reply(top, null, {
//conn.sendHydrated(m.chat, top, wm, null, md, 'ððððð-ððð', null, null, [
//['ðð©ð§ð ð«ðð¯ | ð¼ðððð£ ð®', `${usedPrefix + command}`],
//['ðð¤ð¡ð«ðð§ ðð¡ ððð£ðªÌ | ð½ððð  ð©ð¤ ððð£ðª âï¸', '/menu']
//], m, null, {
//contextInfo: {
//mentionedJid: [a, b, c, d, e, f, g, h, i, j]
//}})
conn.sendFile(m.chat, vn, 'otaku.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}
   
if (command == 'topintegrantes') {
let top = `*_ðTOP 10 L@S MEJORES INTEGRANTESð_*
    
*_1.- ð ${user(a)}_* ð
*_2.- ð ${user(b)}_* ð
*_3.- ð ${user(c)}_* ð
*_4.- ð ${user(d)}_* ð
*_5.- ð ${user(e)}_* ð
*_6.- ð ${user(f)}_* ð
*_7.- ð ${user(g)}_* ð
*_8.- ð ${user(h)}_* ð
*_9.- ð ${user(i)}_* ð
*_10.- ð ${user(j)}_* ð`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topintegrante') {
let top = `*_ðTOP 10 L@S MEJORES INTEGRANTESð_*
    
*_1.- ð ${user(a)}_* ð
*_2.- ð ${user(b)}_* ð
*_3.- ð ${user(c)}_* ð
*_4.- ð ${user(d)}_* ð
*_5.- ð ${user(e)}_* ð
*_6.- ð ${user(f)}_* ð
*_7.- ð ${user(g)}_* ð
*_8.- ð ${user(h)}_* ð
*_9.- ð ${user(i)}_* ð
*_10.- ð ${user(j)}_* ð`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toplagrasa') {
let top = `*_Uwu TOP 10 LA GRASA Uwu_* 
    
*_1.- Bv ${user(a)} Bv_*
*_2.- :v ${user(b)} :v_*
*_3.- :D ${user(c)} :D_*
*_4.- Owo ${user(d)} Owo_*
*_5.- U.u ${user(e)} U.u_*
*_6.- >:v ${user(f)} >:v_*
*_7.- :'v ${user(g)} :'v_*
*_8.- ._. ${user(h)} ._._*
*_9.- :V ${user(i)} :V_*
*_10.- XD ${user(j)} XD_*`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topgrasa') {
let top = `*_Uwu TOP 10 LA GRASA Uwu_* 
    
*_1.- Bv ${user(a)} Bv_*
*_2.- :v ${user(b)} :v_*
*_3.- :D ${user(c)} :D_*
*_4.- Owo ${user(d)} Owo_*
*_5.- U.u ${user(e)} U.u_*
*_6.- >:v ${user(f)} >:v_*
*_7.- :'v ${user(g)} :'v_*
*_8.- ._. ${user(h)} ._._*
*_9.- :V ${user(i)} :V_*
*_10.- XD ${user(j)} XD_*`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toppanafrescos') {
let top = `*_ðTOP 10 PANAFRESCOSð_* 
    
*_1.- ð¤ ${user(a)}_* ð¤
*_2.- ð¤ ${user(b)}_* ð¤
*_3.- ð ${user(c)}_* ð
*_4.- ð ${user(d)}_* ð
*_5.- ð§ ${user(e)}_* ð§
*_6.- ð ${user(f)}_* ð
*_7.- ð ${user(g)}_* ð
*_8.- ð¤ ${user(h)}_* ð¤
*_9.- ðª ${user(i)}_* ðª
*_10.- ð ${user(j)}_* ð`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toppanafresco') {
let top = `*_ðTOP 10 PANAFRESCOSð_* 
    
*_1.- ð¤ ${user(a)}_* ð¤
*_2.- ð¤ ${user(b)}_* ð¤
*_3.- ð ${user(c)}_* ð
*_4.- ð ${user(d)}_* ð
*_5.- ð§ ${user(e)}_* ð§
*_6.- ð ${user(f)}_* ð
*_7.- ð ${user(g)}_* ð
*_8.- ð¤ ${user(h)}_* ð¤
*_9.- ðª ${user(i)}_* ðª
*_10.- ð ${user(j)}_* ð`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topshiposters') {
let top = `*_ð±TOP 10 SHIPOSTERS DEL GRUPOð±_* 
    
*_1.- ð ${user(a)}_* ð
*_2.- ð¤ ${user(b)}_* ð¤
*_3.- ð¥¶ ${user(c)}_* ð¥¶
*_4.- ð¤ ${user(d)}_* ð¤
*_5.- ð¥µ ${user(e)}_* ð¥µ
*_6.- ð¤ ${user(f)}_* ð¤
*_7.- ð ${user(g)}_* ð
*_8.- ð¨ ${user(h)}_* ð¨
*_9.- ð ${user(i)}_* ð
*_10.- ð¤  ${user(j)}_* ð¤ `
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topshipost') {
let top = `*_ð±TOP 10 SHIPOSTERS DEL GRUPOð±_* 
    
*_1.- ð ${user(a)}_* ð
*_2.- ð¤ ${user(b)}_* ð¤
*_3.- ð¥¶ ${user(c)}_* ð¥¶
*_4.- ð¤ ${user(d)}_* ð¤
*_5.- ð¥µ ${user(e)}_* ð¥µ
*_6.- ð¤ ${user(f)}_* ð¤
*_7.- ð ${user(g)}_* ð
*_8.- ð¨ ${user(h)}_* ð¨
*_9.- ð ${user(i)}_* ð
*_10.- ð¤  ${user(j)}_* ð¤ `
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toppajer@s') {
let top = `*_ðTOP L@S MAS PAJEROS/AS DEL GRUPOð¦_* 
    
*_1.- ð¥µ ${user(a)}_* ð¦
*_2.- ð¥µ ${user(b)}_* ð¦
*_3.- ð¥µ ${user(c)}_* ð¦
*_4.- ð¥µ ${user(d)}_* ð¦
*_5.- ð¥µ ${user(e)}_* ð¦
*_6.- ð¥µ ${user(f)}_* ð¦
*_7.- ð¥µ ${user(g)}_* ð¦
*_8.- ð¥µ ${user(h)}_* ð¦
*_9.- ð¥µ ${user(i)}_* ð¦
*_10.- ð¥µ ${user(j)}_* ð¦`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toplind@s') {
let top = `*_ð³TOP L@S MAS LIND@S Y SEXIS DEL GRUPOð³_*
    
*_1.- â¨ ${user(a)}_* â¨
*_2.- â¨ ${user(b)}_* â¨
*_3.- â¨ ${user(c)}_* â¨
*_4.- â¨ ${user(d)}_* â¨
*_5.- â¨ ${user(e)}_* â¨
*_6.- â¨ ${user(f)}_* â¨
*_7.- â¨ ${user(g)}_* â¨
*_8.- â¨ ${user(h)}_* â¨
*_9.- â¨ ${user(i)}_* â¨
*_10.- â¨ ${user(j)}_* â¨`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toplindos') {
let top = `*_ð³TOP L@S MAS LIND@S Y SEXIS DEL GRUPOð³_*
    
*_1.- â¨ ${user(a)}_* â¨
*_2.- â¨ ${user(b)}_* â¨
*_3.- â¨ ${user(c)}_* â¨
*_4.- â¨ ${user(d)}_* â¨
*_5.- â¨ ${user(e)}_* â¨
*_6.- â¨ ${user(f)}_* â¨
*_7.- â¨ ${user(g)}_* â¨
*_8.- â¨ ${user(h)}_* â¨
*_9.- â¨ ${user(i)}_* â¨
*_10.- â¨ ${user(j)}_* â¨`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topput@s') {
let top = `*_ðTOP L@S MAS PUT@S DEL GRUPO SONð¥_* 
    
*_1.- ð ${user(a)}_* ð
*_2.- ð ${user(b)}_* ð
*_3.- ð ${user(c)}_* ð
*_4.- ð ${user(d)}_* ð
*_5.- ð ${user(e)}_* ð
*_6.- ð ${user(f)}_* ð
*_7.- ð ${user(g)}_* ð
*_8.- ð ${user(h)}_* ð
*_9.- ð ${user(i)}_* ð
*_10.- ð ${user(j)}_* ð`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topfamosos') {
let top = `*_ðTOP PERSONAS FAMOSAS EN EL GRUPOð_* 
    
*_1.- ð« ${user(a)}_* ð«
*_2.- ð¥ ${user(b)}_* ð¥
*_3.- ð¤© ${user(c)}_* ð¤©
*_4.- ð« ${user(d)}_* ð«
*_5.- ð¥ ${user(e)}_* ð¥
*_6.- ð¤© ${user(f)}_* ð¤©
*_7.- ð« ${user(g)}_* ð«
*_8.- ð¥ ${user(h)}_* ð¥
*_9.- ð¤© ${user(i)}_* ð¤©
*_10.- ð« ${user(j)}_* ð«`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topfamos@s') {
let top = `*_ðTOP PERSONAS FAMOSAS EN EL GRUPOð_* 
    
*_1.- ð« ${user(a)}_* ð«
*_2.- ð¥ ${user(b)}_* ð¥
*_3.- ð¤© ${user(c)}_* ð¤©
*_4.- ð« ${user(d)}_* ð«
*_5.- ð¥ ${user(e)}_* ð¥
*_6.- ð¤© ${user(f)}_* ð¤©
*_7.- ð« ${user(g)}_* ð«
*_8.- ð¥ ${user(h)}_* ð¥
*_9.- ð¤© ${user(i)}_* ð¤©
*_10.- ð« ${user(j)}_* ð«`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topparejas') {
let top = `*_ð Las 5 maravillosas parejas del grupo ð_*
    
*_1.- ${user(a)} ð ${user(b)}_* 
Que hermosa pareja ð, me invitan a su Boda ð

*_2.- ${user(c)} ð ${user(d)}_*  
ð¹ Ustedes se merecen lo mejor del mundo ð

*_3.- ${user(e)} ð ${user(f)}_* 
Tan enamorados ð, para cuando la familia ð¥°

*_4.- ${user(g)} ð ${user(h)}_* 
ð Decreto que ustedes son la pareja del AÃ±o ð 

*_5.- ${user(i)} ð ${user(j)}_* 
Genial! ð, estÃ¡n de Luna de miel ð¥µâ¨â¤ï¸âð¥`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'top5parejas') {
let top = `*_ð Las 5 maravillosas parejas del grupo ð_*
    
*_1.- ${user(a)} ð ${user(b)}_* 
Que hermosa pareja ð, me invitan a su Boda ð

*_2.- ${user(c)} ð ${user(d)}_*  
ð¹ Ustedes se merecen lo mejor del mundo ð

*_3.- ${user(e)} ð ${user(f)}_* 
Tan enamorados ð, para cuando la familia ð¥°

*_4.- ${user(g)} ð ${user(h)}_* 
ð Decreto que ustedes son la pareja del AÃ±o ð 

*_5.- ${user(i)} ð ${user(j)}_* 
Genial! ð, estÃ¡n de Luna de miel ð¥µâ¨â¤ï¸âð¥`
m.reply(top, null, { mentions: conn.parseMention(top) })}
  
}
handler.help = handler.command = ['topgays', 'topotakus', 'topintegrantes', 'topintegrante', 'toplagrasa', 'topgrasa', 'toppanafrescos', 'toppanafresco', 'topshiposters', 'topshipost', 'toppajer@s', 'toplindos', 'toplind@s', 'topput@s', 'topfamosos', 'topfamos@s', 'topparejas', 'top5parejas' ]
handler.tags = ['games']
handler.group = true
export default handler  
