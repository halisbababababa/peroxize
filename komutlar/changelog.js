const Discord = require('discord.js');

exports.run = (client, message, args) => {

let embed = new Discord.MessageEmbed()
.setTitle("HNS PRE")
.setDescription("⭐ Funjump plugini eklendi.\nMarkete oyuncu modelleri eklendi.\nHayalet modunda gstrafe açıldı.")
.setFooter("19.10.2020 | Peroxize CS:GO")
.setColor("#5994ff")
message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["cl"],
  permLevel: 4
};

exports.help = {
  name: 'changelog',
  description: 'sunucudaki değişiklikleri atcam',
  usage: 'changelog'
};