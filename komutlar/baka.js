const Discord = require('discord.js');
const client = require('nekos.life');
const {sfw} = new client();

exports.run = async (client, message, params) => {
  
  let new1 = await (sfw.baka().then(baka => baka.url))
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
  name: 'baka',
  buyukIsim: 'Baka',
  kategori: 'Anime', 
  description: 'Rastgele bir baka resmi gönderir.',
  usage: 'baka'
};