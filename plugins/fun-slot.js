/* CREDITOS: https://github.com/FG98F */

let handler = async (m, { args, usedPrefix, command, conn }) => {
let fa = `
${mg}πΏππ½π πΏπ πππΌπ πΏπ ππΌ πππππππππ ππΌππππΌ:
πππ ππππ πππ πΌπ πππππππ:

πππππππ | πππΌππππ
*${usedPrefix + command} 50*`.trim()

if (!args[0]) throw fa
if (isNaN(args[0])) throw fa
let apuesta = parseInt(args[0])

let users = global.db.data.users[m.sender]
//let time = global.db.data.users[m.sender].lastwork + 30000
//if (new Date - users.lastwork < 30000) throw `*ππππππΌ ππ ${msToTime(time - new Date())} ππΌππΌ πΎπππππππΌπ πΌπππππΌππΏπ* π°\n\n*πΎπππ π½πΌπΎπ ππ ${msToTime(time - new Date())} ππ πΎπππππππ π½ππππππ* π°`

if (apuesta < 10) throw `${lenguajeGB['smsAvisoAG']()}πΏππ½π πΏπ πΌπππππΌπ ππ ππππππ πΏπ *10*\n\nπππ ππππ π½ππ πΌ πππππππ ππ *10*`

if (users.exp < apuesta) {
throw `${lenguajeGB['smsAvisoFG']()}ππ πΌππΎπΌπππΌ ππΌππΌ πΌπππππΌπ πππ, ππ πππΎππππππΏπ ππππππΌπΎπππΌπ πΎππ ππ π½ππ ππΌππΌ ππ½πππππ πππΎπππππ\n\nπππ ππππππ ππ π½ππ, π πππΎππππππΏ πππ ππππππΌπΎπ ππππ πππ π½ππ ππ πππ πππππππΎππ`    
}
if (command == 'slot1') {
let time = global.db.data.users[m.sender].lastslot + 30000
if (new Date - users.lastslot < 30000) throw `*ππππππΌ ππ ${msToTime(time - new Date())} ππΌππΌ πΎπππππππΌπ πΌπππππΌππΏπ πππ* π°\n\n*πΎπππ π½πΌπΎπ ππ ${msToTime(time - new Date())} ππ πΎπππππππ π½ππππππ* π°`
users.lastslot = new Date * 1
    
let emojis = ["π", "β‘", "π"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `β¨ *QUE PRO!! HAS GANADO +${apuesta + apuesta} EXP*\n\nπ₯³ *COOL!! YOU JUST WON +${apuesta + apuesta} EXP*`
users.exp += apuesta
} else if (a == b || a == c || b == c) {
end = `π *CASI!!, VUELVA A INTENTAR*\n*BONO DE +50 EXP*\n\nπ― *ALMOST!!, TRY AGAIN*\n*BONDS OF +50 EXP*`
users.exp += 50
} else {
end = `πΏ *HA PERDIDO!! β -${apuesta} EXP*\n\n*HAS LOST!! β -${apuesta} EXP*`
users.exp -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let s = `
π° | *RANURAS* | π° 
 ββββββββ
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ββββββββ
π° |   *SLOTS*   | π°`
await conn.sendHydrated(m.chat, `${s}\n\n${end}`, wm, null, md, 'πππππ-πππ', null, null, [
['β‘ πΌπππππΌπ ππππΌ πππ | πΌππΌππ', `${usedPrefix}slot1 ${apuesta}`],
['π πΌπππππΌπ πΎππ πππππ', `${usedPrefix}slot2 ${apuesta}`],
['π πΌπππππΌπ πΎππ πΏππΌππΌππππ', `${usedPrefix}slot3 ${apuesta}`]
], m,)}   


if (users.money < apuesta)  { 
throw `${lenguajeGB['smsAvisoFG']()}ππ πΌππΎπΌπππΌ ππΌππΌ πΌπππππΌπ πππππ, ππ πππΎππππππΏπ ππππππΌπΎπππΌπ πΎππ ππ π½ππ ππΌππΌ ππ½πππππ πππΎπππππ\n\nπππ ππππππ ππ π½ππ, π πππΎππππππΏ πππ ππππππΌπΎπ ππππ πππ π½ππ ππ πππ πππππππΎππ`    
}
if (command == 'slot2') {
let time = global.db.data.users[m.sender].lastslot + 30000
if (new Date - users.lastslot < 30000) throw `*ππππππΌ ππ ${msToTime(time - new Date())} ππΌππΌ πΎπππππππΌπ πΌπππππΌππΏπ πππππ* π°\n\n*πΎπππ π½πΌπΎπ ππ ${msToTime(time - new Date())} ππ πΎπππππππ π½ππππππ* π°`
users.lastslot = new Date * 1
    
let emojis = ["π", "π", "π"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `β¨ *QUE PRO!! HAS GANADO +${apuesta + apuesta} ShinaCoins*\n\nπ₯³ *COOL!! YOU JUST WON +${apuesta + apuesta} ShinaCoins*`
users.money += apuesta
} else if (a == b || a == c || b == c) {
end = `π *CASI!!, VUELVA A INTENTAR*\n*BONO DE +30 ShinaCoins*\n\nπ― *ALMOST!!, TRY AGAIN*\n*BONDS OF +30 ShinaCoins*`
users.money += 30
} else {
end = `πΏ *HA PERDIDO!! β -${apuesta} ShinaCoins*\n\n*HAS LOST!! β -${apuesta} ShinaCoins*`
users.money -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let ss = `
π° | *RANURAS* | π° 
 ββββββββ
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ββββββββ
π° |   *SLOTS*   | π°`
await conn.sendHydrated(m.chat, `${ss}\n\n${end}`, wm, null, md, 'πππππ-πππ', null, null, [
['π πΌπππππΌπ ππππΌ πππ | πΌππΌππ', `${usedPrefix}slot2 ${apuesta}`],
['β‘ πΌπππππΌπ πΎππ πππ', `${usedPrefix}slot1 ${apuesta}`],
['π πΌπππππΌπ πΎππ πΏππΌππΌππππ', `${usedPrefix}slot3 ${apuesta}`]
], m,)}

    
if (users.limit < apuesta) {  
throw `${lenguajeGB['smsAvisoFG']()}ππ πΌππΎπΌπππΌ ππΌππΌ πΌπππππΌπ πΏππΌππΌππππ, ππ πππΎππππππΏπ ππππππΌπΎπππΌπ πΎππ ππ π½ππ ππΌππΌ ππ½πππππ πππΎπππππ\n\nπππ ππππππ ππ π½ππ, π πππΎππππππΏ πππ ππππππΌπΎπ ππππ πππ π½ππ ππ πππ πππππππΎππ`    
}
if (command == 'slot3') {
let time = global.db.data.users[m.sender].lastslot + 30000
if (new Date - users.lastslot < 30000) throw `*ππππππΌ ππ ${msToTime(time - new Date())} ππΌππΌ πΎπππππππΌπ πΌπππππΌππΏπ πΏππΌππΌππππ* π°\n\n*πΎπππ π½πΌπΎπ ππ ${msToTime(time - new Date())} ππ πΎπππππππ π½ππππππ* π°`
users.lastslot = new Date * 1
    
let emojis = ["πͺ΅", "π£", "π"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `β¨ *QUE PRO!! HAS GANADO +${apuesta + apuesta} Diamantes*\n\nπ₯³ *COOL!! YOU JUST WON +${apuesta + apuesta} Diamantes*`
users.limit += apuesta
} else if (a == b || a == c || b == c) {
end = `π *CASI!!, VUELVA A INTENTAR*\n*BONO DE +2 Diamantes*\n\nπ― *ALMOST!!, TRY AGAIN*\n*BONDS OF +2 Diamantes*`
users.limit += 2
} else {
end = `πΏ *HA PERDIDO!! β -${apuesta} Diamantes*\n\n*HAS LOST!! β -${apuesta} Diamantes*`
users.limit -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let sss = `
π° | *RANURAS* | π° 
 ββββββββ
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ββββββββ
π° |   *SLOTS*   | π°`
await conn.sendHydrated(m.chat, `${sss}\n\n${end}`, wm, null, md, 'πππππ-πππ', null, null, [
['π πΌπππππΌπ ππππΌ πππ | πΌππΌππ', `${usedPrefix}slot3 ${apuesta}`],
['β‘ πΌπππππΌπ πΎππ πππ', `${usedPrefix}slot1 ${apuesta}`],
['π πΌπππππΌπ πΎππ πππππ', `${usedPrefix}slot2 ${apuesta}`]
], m,)}
        
        
if (command == 'slot') {       
await conn.sendHydrated(m.chat, `*Elija en que apostarΓ‘ ${apuesta}*`, wm, null, md, 'πππππ-πππ', null, null, [
['β‘ πππ', `${usedPrefix}slot1 ${apuesta}`],
['π πππππ', `${usedPrefix}slot2 ${apuesta}`],
['π πΏππΌππΌππππ', `${usedPrefix}slot3 ${apuesta}`]
], m,)}
        
if (command == 'apostar') {       
await conn.sendHydrated(m.chat, `*Elija en que apostarΓ‘ ${apuesta}*\n\n*Choose what you will*`, wm, null, md, 'πππππ-πππ', null, null, [
['β‘ πππ', `${usedPrefix}slot1 ${apuesta}`],
['π πππππ', `${usedPrefix}slot2 ${apuesta}`],
['π πΏππΌππΌππππ', `${usedPrefix}slot3 ${apuesta}`]
], m,)}

//global.db.data.users[m.sender].lastwork = new Date * 1
       
}
handler.help = ['slot <apuesta>']
handler.tags = ['game']
handler.command = ['slot', 'apostar', 'slot1', 'slot2', 'slot3']
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s " 
}
