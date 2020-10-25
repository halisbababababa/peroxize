const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require('moment')

exports.run = async (client, message, params) => { 

    moment.locale("tr")
    var konum = 'Konumlar'
        if(message.guild.region === "russia") {
            var konum = 'Rusya'
        }
        if(message.guild.region === "us-west") {
            var konum = 'Batı Amerika'
        }
        if(message.guild.region === "us-south") {
            var konum = 'Güney Amerika'
        }
        if(message.guild.region === "us-east") {
            var konum = 'Doğu Amerika'
        }
        if(message.guild.region === "us-central") {
            var konum = 'Amerika'
        }
        if(message.guild.region === "brazil") {
            var konum = 'Brezilya'
        }
        if(message.guild.region === "singapore") {
            var konum = 'Singapur'
        }
        if(message.guild.region === "sydney") {
            var konum = 'Sidney'
        }
        if(message.guild.region === "eu-west") {
            var konum = 'Batı Avrupa'
        }
        if(message.guild.region === "eu-south") {
            var konum = 'Güney Avrupa'
        }
        if(message.guild.region === "eu-east") {
            var konum = 'Doğu Avrupa'
        }
        if(message.guild.region === "eu-central") {
            var konum = 'Orta Avrupa'
        }
        if(message.guild.region === "hongkong") {
            var konum = 'Hong Kong'
        }
        if(message.guild.region === "japan") {
            var konum = 'Japonya'
        }  

  

  var tarih = moment(message.guild.createdAt).format("DD MMMM YYYY hh:mm")
  let ogecen = Date.now() - message.guild.createdAt
  let ogun = Math.floor(ogecen / 86400000);

  let online = client.emojis.cache.find(emoji => emoji.name === "cevrimici") 
  let offline = client.emojis.cache.find(emoji => emoji.name === "cevrimdisi") 
  let idle = client.emojis.cache.find(emoji => emoji.name === "bosta") 
  let dnd = client.emojis.cache.find(emoji => emoji.name === "dnd") 
  
  let sunucubilgi = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setColor("#00000f")
  .setThumbnail(message.guild.iconURL())
  .setDescription(`**Sunucu Bilgileri**\nAdı: ${message.guild.name}\nOluşturulma: ${tarih} (${ogun} gün önce)\nID: ${message.guild.id}\nSahibi: ${message.guild.owner}\nBölge: Avrupa\nDoğrulama Seviyesi: Orta Seviye\n\n**Sunucu İstatistikleri**\nToplam Üye: ${message.guild.members.cache.size}\nMetin Kanalları: ${message.guild.channels.cache.filter(c => c.type === "text").size}\nSes Kanalları: ${message.guild.channels.cache.filter(c => c.type === "voice").size}\nTüm Roller: \`${ayarlar.prefix}roller\`\nTüm Emojiler: \`${ayarlar.prefix}emojiler\`\n\n**Takviye Bilgileri**\nTakviye Sayısı: ${message.guild.premiumSubscriptionCount}\nTakviye Seviyesi: ${message.guild.premiumTier}\n\n**Üye Bilgileri**\n ${online} - ${message.guild.members.cache.filter(m => m.user.presence.status === "online").size}\n${idle} - ${message.guild.members.cache.filter(m => m.user.presence.status === "idle").size}\n${dnd} - ${message.guild.members.cache.filter(m => m.user.presence.status === "dnd").size}\n${offline} - ${message.guild.members.cache.filter(m => m.user.presence.status === "offline").size}`)
  message.channel.send(sunucubilgi)
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sb", "sunucubilgi"],
  permLevel: 0
};
 
exports.help = {
  name: 'sunucu',
  buyukIsim: 'Sunucu',
  kategori: 'Genel', 
  description: 'Mesajı yazdığınız sunucunun bilgilerini gösterir.',
  usage: 'sunucu'
};