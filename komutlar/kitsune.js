const Discord = require('discord.js');
const Neko = require('neko-love.js');


exports.run = async (client, message, params) => {
  
  let new1 =  Neko("neko").then((url) => {
  let embed = new Discord.MessageEmbed()
  .setImage(url)
  .setColor("#00000f")
  message.channel.send(embed)
});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'kitsune',
  buyukIsim: 'Kitsune',
  kategori: 'Anime', 
  description: 'Rastgele bir kitsune resmi gönderir.',
  usage: 'kitsune'
};