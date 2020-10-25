const Discord = require('discord.js');
exports.run = (client, message, args) => {  

  const emojiList =  message.guild.emojis.cache.map(e=>e.toString()).join(" ");
  message.channel.send(emojiList)

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'emojiler',
  description: 'Sunucudaki emojileri listeler.',
  usage: 'emojiler'
};