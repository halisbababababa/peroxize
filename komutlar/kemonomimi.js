const Discord = require('discord.js');
const client = require('nekos.life');
const {sfw} = new client();

exports.run = async (client, message, params) => {
  
  let new1 = await (sfw.kemonomimi().then(kemonomimi => kemonomimi.url))
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
  name: 'kemonomimi',
  buyukIsim: 'Kemonomimi',
  kategori: 'Anime', 
  description: 'Rastgele bir kemonomimi resmi gönderir.',
  usage: 'kemonomimi'
};