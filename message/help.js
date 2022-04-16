const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} - MD Beta 」 ──*
	
  _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

    Library🌹 : *Baileys-MD*.
    Prefix🪀 : ( ${prefix} )
    Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
    Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

	Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
	Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
	Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
	Balance : $${toCommas(getBalance(sender, balance))}
  Note : Anggap _<>_ *Tidak Ada*🍷
  
  _Ada Bug? Ketik ${prefix}report Bug mu_
  ${readmore}
    _Main Menu_
  ≻ ${prefix}menu
  ≻ ${prefix}owner
  ≻ ${prefix}donasi
  ≻ ${prefix}speed
  ≻ ${prefix}runtime
  ≻ ${prefix}cekprem
  ≻ ${prefix}listprem

     _Converter/Tools_
  ≻ ${prefix}stiker <ReplyGambar/Caption>
  
     _Downloader_
  ≻ ${prefix}play <Querry>
  ≻ ${prefix}tiktok <LinkTt>
  ≻ ${prefix}tiktokaudio <LinkTt>
  ≻ ${prefix}ytmp4 <LinkYt>
  ≻ ${prefix}ytmp3 <LinkYt>
  ≻ ${prefix}getvideo
  ≻ ${prefix}getmusic
  ≻ ${prefix}instagram <LinkIg>
  ≻ ${prefix}facebook <LinkFb>
  
     _Random Menu_
  ≻ ${prefix}quote
  ≻ ${prefix}cecan
  ≻ ${prefix}cogan
  ≻ ${prefix}naruto
  ≻ ${prefix}loli
  ≻ ${prefix}waifu
  ≻ ${prefix}husbu
  ≻ ${prefix}yaoi

     _Premium User_
  ≻ ${prefix}ass
  ≻ ${prefix}bdsm
  ≻ ${prefix}ahegao
  ≻ ${prefix}cuckold
  ≻ ${prefix}blowjob
  ≻ ${prefix}cum
  ≻ ${prefix}ero
  ≻ ${prefix}femdom
  ≻ ${prefix}foot
  ≻ ${prefix}gangbang
  ≻ ${prefix}xnxx <Link>
  
     _Menu Maker_
  ≻ ${prefix}glitch <Text> <Text>
  ≻ ${prefix}flaming <Text>
  ≻ ${prefix}shadow <Text>
  ≻ ${prefix}wolftext <Text>
  ≻ ${prefix}cup <Text>
  ≻ ${prefix}cup2 <Text>
  ≻ ${prefix}romantic <Text>
  ≻ ${prefix}writetext <Text>
  ≻ ${prefix}lovetext <Text>
  ≻ ${prefix}lovetext2 <Text>
  ≻ ${prefix}undergrass <Text>
  ≻ ${prefix}coffecup <Text>
  ≻ ${prefix}woodheart <Text>
  ≻ ${prefix}tahta <Text>
  ≻ ${prefix}waifumaker <Text>
  ≻ ${prefix}lolimaker <Text>
  ≻ ${prefix}kanekimaker <Text>
  ≻ ${prefix}guramaker <Text>
  ≻ ${prefix}leaves <Text>
  ≻ ${prefix}pornhub <Text>
  ≻ ${prefix}3d <Text>
  ≻ ${prefix}christmas <Text>
  ≻ ${prefix}logowolf <Text>
  ≻ ${prefix}logowolf2 <Text>
  ≻ ${prefix}thunder <Text>
  
  *( 🍻 )  Maker From Image*
  ≻ ${prefix}maker1 <Text>
  ≻ ${prefix}maker2 <Text>
  ≻ ${prefix}maker3 <Text>
  ≻ ${prefix}maker4 <Text>
  ≻ ${prefix}maker5 <Text>
  ≻ ${prefix}maker6 <Text>
  ≻ ${prefix}maker7 <Text>
  ≻ ${prefix}maker8 <Text>
  ≻ ${prefix}maker9 <Text>
  ≻ ${prefix}maker10 <Text>
  
     _Menu Lain Nya_
  ≻ ${prefix}shortlink <Link>
  ≻ ${prefix}ssdesktop <Link>
  ≻ ${prefix}sshpfull <Link>
  ≻ ${prefix}kbbi <Kata>
  ≻ ${prefix}faktaunik
  ≻ ${prefix}ppcp
  ≻ ${prefix}kalkulator
  ≻ ${prefix}darkjokes
  ≻ ${prefix}covid19
  ≻ ${prefix}cerpen
  ≻ ${prefix}cersex
  ≻ ${prefix}wiki <Query>
  ≻ ${prefix}igstalk <Username>
  ≻ ${prefix}say <Text>
  ≻ ${prefix}qr <Text>
  ≻ ${prefix}readmore <Text>|<Text>
  ≻ ${prefix}hitungmundur 12 10 2022

     _Islamic Menu_
  ≻ ${prefix}quran <nomer>
  ≻ ${prefix}quranaudio <surah> <ayat>
  ≻ ${prefix}listquran <nomer>
  ≻ ${prefix}kisahnabi <Nama Nabi>

     _Menu Tulis_
  ≻ ${prefix}nuliskanan <Text>
  ≻ ${prefix}nuliskiri <Text>
  ≻ ${prefix}foliokanan <Text>
  ≻ ${prefix}foliokiri <Text>
  
      _Search Menu_
  ≻ ${prefix}lirik <Judul>
  ≻ ${prefix}grupwa <Pencarian>
  ≻ ${prefix}ytsearch <Pencarian>
  ≻ ${prefix}pinterest <Querry>
  
     _Game & Fun Menu_
  ≻ ${prefix}tictactoe @tag
  ≻ ${prefix}delttc
  ≻ ${prefix}suit
  ≻ ${prefix}slot
  ≻ ${prefix}tebakgambar
  ≻ ${prefix}apakah <Query>
  ≻ ${prefix}kapankah <Query>
  ≻ ${prefix}rate <Query>
  ≻ ${prefix}gantecek <Nama>
  ≻ ${prefix}cantikcek <Nama>
  ≻ ${prefix}sangecek <Nama>
  ≻ ${prefix}gaycek <Nama>
  ≻ ${prefix}lesbicek <Nama>
  ≻ ${prefix}gimana <Query>
  ≻ ${prefix}bisakah <Query>
  ≻ ${prefix}cekme
  
      _Payment & Bank_
  ≻ ${prefix}buylimit <Jumlah>
  ≻ ${prefix}buyglimit <Jumlah>
  ≻ ${prefix}transfer @tag <jumlah>
  ≻ ${prefix}limit
  ≻ ${prefix}balance
  ≻ ${prefix}topbalance

     _Group Menu_
  ≻ ${prefix}linkgrup
  ≻ ${prefix}setppgrup
  ≻ ${prefix}setnamegc
  ≻ ${prefix}setdesc
  ≻ ${prefix}group <Open/Close>
  ≻ ${prefix}revoke
  ≻ ${prefix}hidetag <Text>
  ≻ ${prefix}kick <@tag>
  ≻ ${prefix}add <@tag>
  
    _Owner Menu_
  > evalcode
  x evalcode-2
  $ executor
  ≻ ${prefix}setppbot
  ≻ ${prefix}exif
  ≻ ${prefix}leave
  ≻ ${prefix}addprem
  ≻ ${prefix}delprem
  ≻ ${prefix}broadcast

  *THANKS TO*
  - Allah SWT
  - @FahriGans (Saya)
  - Baileys-Md (Adiwa Jshing)
  - @yannnnn.zz_ (Riyan)
  - @sofunsyabi.id (Arasya)
  - M Hadi Firmansya (Hadi Api)
  - @melcanz_ (Amel)
  - @hardianto.xyz (Anto)`
}