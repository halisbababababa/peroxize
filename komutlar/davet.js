const Discord = require('discord.js');

exports.run = async (client, message, args)=> {

message.channel.send(`https://discord.gg/kJtCtP5`)
}

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bilgi', 'ekle'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  buyukIsim: 'Davet',
  kategori: 'Genel',
  description: 'Botun davet ve ilgili bağlantılarını gösterir.',
  usage: 'davet'
};