  const Discord = require('discord.js');
const client = require('nekos.life');
const {sfw} = new client();

exports.run = async (client, message, params) => {
  
  let new1 = await (sfw.waifu().then(waifu => waifu.url))
  let embed = new Discord.MessageEmbed()
  .setImage(new1)
  .setColor("#00000f")
  message.channel.send(embed)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'waifu',
  buyukIsim: 'Waifu',
  kategori: 'Anime', 
  description: 'Rastgele bir waifu resmi gönderir.',
  usage: 'waifu'
};