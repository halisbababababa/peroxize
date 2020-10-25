const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");

exports.run = async (client, message, args) => {
  
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
 
   const calismaSuresi = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   message.channel.send("saho tm naber la saho kedi miyaav kedi saho").then(message => {
message.delete({ timeout: 1000 })
   })
   const embed = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setColor("#00000f")
  .addField("Bellek Kullanımı", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + 'MB', true)  
  .addField("Çalışma Süresi", calismaSuresi, true)
  .addField("Kütüphane", `Discord.js`, true)
  .addField('Kullanıcılar', client.guilds.cache.reduce((a, b) => a + b.memberCount, 0), true)
  .addField("Sunucular", client.guilds.cache.size.toLocaleString(), true)
  .addField("Kanallar", client.channels.cache.size.toLocaleString(), true)
  .addField("Davet", "[Buraya tıkla!](https://discord.gg/Tvqq9wQ)", true)
  .addField("Mağaza", "[Buraya tıkla!](https://shopier.com/overize/)", true)
  .addField("Steam", "[Buraya tıkla!](https://tinyurl.com/regainsteam)", true)
  .setFooter(`ID: ${client.user.id}`)
  message.channel.send(embed)
  }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i', 'botbilgi'],
  permLevel: 0
};
 
exports.help = {
  name: "istatistik",
  buyukIsim: 'İstatistik',
  kategori: 'Genel', 
  description: "Botun güncel istatistiklerini gösterir.",
  usage: "istatistik"
};