import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `${lenguajeGB['smsAvisoMG']()}πππΎπππ½πΌ ππ ππππ½ππ π ππππππ\nπππππππ\n*${usedPrefix + command} Billie Eilish - Bellyache*\n\nπππππ πππ ππΌππ ππ πππππ\nπππΌππππ\n*${usedPrefix + command} Billie Eilish - Bellyache*`
  await m.reply(wait)
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Error'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId

  let captvid = `*π© π  πͺ β§βββ ${vs} ββββ§ π© π  πͺ*
ΰ¦ *TΓTULO | TITLE:* 
Β» ${title}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ *DESCRIPCIΓN | DESCRIPTION:*
Β» ${description}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ *DURACION | DURATION:*
Β» ${durationH}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ *VISTAS| VIEWS*:
Β» ${viewH}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ *PUBLICADO | PUBLISHED:* 
Β» ${publishedTime}

*π© π  πͺ β§βββ ${vs} ββββ§ π© π  πͺ*`
  conn.sendButton(m.chat, `*π© π  πͺ β§βββ ${vs} ββββ§ π© π  πͺ*
ΰ¦ *TΓTULO | TITLE:*
Β» ${title}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ *DESCRIPCIΓN | DESCRIPTION:*
Β» ${description}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ *DURACION | DURATION:*
Β» ${durationH}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ *VISTAS| VIEWS:*
Β» ${viewH}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ *PUBLICADO | PUBLISHED:* 
Β» ${publishedTime}

*π© π  πͺ β§βββ ${vs} ββββ§ π© π  πͺ*`, author.trim(), await( await conn.getFile(thumbnail)).data, ['π½ π₯ππππ π½', `${usedPrefix}getvid ${url} 360`], false, { quoted: m, 'document': { 'url':'https://wa.me/51936448126' },
'mimetype': global.dpdf,
'fileName': `${vs}`,
'fileLength': 666666666666666,
'pageCount': 666,contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: `${url}`,
title: `πππ£ππππ£-ππ`,
body: wm,
sourceUrl: 'Soon', thumbnail: await ( await conn.getFile(thumbnail)).data
}} })
  
//let buttons = [{ buttonText: { displayText: 'π½VIDEO' }, buttonId: `${usedPrefix}ytv ${url} 360` }]
//let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid, footer: author, buttons }, { quoted: m })

const yt = await await youtubedlv2(url).catch(async _ => await youtubedl(url)).catch(async _ => await youtubedlv3(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: wm,
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
                                                                                                                 }
                       }
  }

  return conn.sendMessage(m.chat, doc, { quoted: m })
	// return conn.sendMessage(m.chat, { document: { url: link }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m})
	// return await conn.sendFile(m.chat, link, title + '.mp3', '', m, false, { asDocument: true })
}
handler.help = ['play4'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play4$/i

handler.exp = 0
handler.limit = 2
handler.level = 3
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

