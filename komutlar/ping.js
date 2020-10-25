const Discord = require('discord.js')

exports.run = function(client, message) {

    var ping1 = Date.now() - message.createdTimestamp + "ms";
    message.channel.send('**Bot gecikmesi:** ' + client.ws.ping + "ms\n**Mesaj gecikmesi:** " + ping1)
  }

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'ping', 
  buyukIsim: 'Ping',
  kategori: 'Genel', 
  description: 'Botun ve mesajların gecikmesini gösterir.',
  usage: 'ping'
};