import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.ibb.co/v3tTr1p/Menu1.jpg'
//const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.getProfilePicture(who)         //pp = await conn.getProfilePicture(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let user = global.db.data.users[m.sender]
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str =
`โ ๐๐๐๐ฝ๐๐ ${name} ${user.registered === true ? 'องององอฆ๊ถอฃอคโแฒแดณแดฎ' : ''}
โโโโโโโโโโโโโโโโโโ
โ ๐๐๐๐๐๐ ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
โโโโโโโโโโโโโโโโโโ
โ ๐๐๐๐ผ๐พ๐ wa.me/${who.split`@`[0]}${registered ?'\nโโโโโโโโโโโโโโโโโโ\nโ ๐๐ฟ๐ผ๐ฟ ' + age + ' *aรฑos*' : ''}
โโโโโโโโโโโโโโโโโโ
โ ๐๐๐๐๐๐๐ *${limit}* ๐๐ ๐๐จ๐ค๐จ
โโโโโโโโโโโโโโโโโโ
โ ๐๐๐๐๐๐๐๐ผ๐ฟ๐(๐ผ) ${registered ? 'โ': 'โ'}
โโโโโโโโโโโโโโโโโโ
โ ๐๐๐๐๐๐๐ ${prem ? 'โ' : 'โ'}
โโโโโโโโโโโโโโโโโโ
โ ๐๐๐๐๐๐ ๐ฟ๐ ๐๐๐๐๐
โ *${sn}*`
conn.sendButton(m.chat, str, wm, await(await fetch(pp)).buffer(), [['๐๐๐ง๐๐๐๐๐๐ง | ๐๐๐ง๐๐๐ฎ', '/verificar โ'], ['๐๐ช๐ ๐๐ข๐ฅ๐๐๐๐ ๐ก๐ ๐๐ซ๐๐ฃ๐ฉ๐ช๐ง๐!! ๐', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
