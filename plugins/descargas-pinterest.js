import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()} ššš šæš šš¼ ššššššššš šš¼šššš¼\n*${usedPrefix + command} SHINA*\n\nššš ššš š¾šššš¼ššæ šššš šššš\n*${usedPrefix + command} Cat*` 
const json = await pinterest(text)
await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
ā°ā±šā± *šĢšššš | ššš¾š¾ššš* ā±šā±ā®`.trim(), m)
  
  conn.sendHydrated(m.chat, `š šššØšŖš”š©ššš¤ | šššØšŖš”š©: ${text}`, `ššš£š©šš§ššØš© | ${wm}`, null, md, 'ššššš-ššš', null, null, [
['š ššššŖššš£š©š | ššš­š©', `/pinterest ${text}`],
['š šš¤š¤šš”š ', `#image ${text}`],
['š ššš£šŖ', `.menu`],  
], m)
                    }
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.exp = 25
export default handler
