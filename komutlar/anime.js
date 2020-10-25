const malScraper = require('mal-scraper')
const Discord = require('discord.js');
const search = malScraper.search
const type = 'anime'
const croxy = require("croxy-api")
new croxy("o2bvyBgMfJ2FWLNfxWG3NLecs5Q1ZjlwL5AYdcYf3LoHPzVnPr")

exports.run = async (client, message, args)=> {

try {       


let anime = args.slice(0).join(" ")
if (!anime) return message.channel.send(`Bir anime adı girmelisin.`)
 
let name = await malScraper.getInfoFromName(anime)
let watchlist = await malScraper.getWatchListFromUser(anime)
let news = await malScraper.getNewsNoDetails(anime)
let episode = await malScraper.getEpisodesList(anime)

let embed = new Discord.MessageEmbed()
.setTitle(name.englishTitle + " (" + name.japaneseTitle + ")")
.setURL(name.url)
.setDescription(name.synopsis)
.addField('Skor', name.score + ` (${name.ranked})`, true)
.addField("Stüdyo", name.studios, true)
.addField("Bölüm Sayısı", name.episodes, true)
.addField("Yayında Kalma Süresi", name.aired + " tarihleri arasında yayında.")
.setThumbnail(name.picture)
.setColor("#00000f")
message.channel.send(embed)
     
} catch (err ) {
 }
}

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['anime-ara'],
  permLevel: 0
}

exports.help = {
  name: 'anime',
  buyukIsim: 'Anime',
  kategori: 'Anime', 
  description: 'Girilen animeyi MyAnimeListte arar.',
  usage: 'anime [@anime-adı]'
};