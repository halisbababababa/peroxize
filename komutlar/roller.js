const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  
  let roller = message.guild.roles.cache.filter(x => x.name !== "@everyone").array().sort((x, y) => x.position - y.position).reverse().map(x => + x.id  + " | " + x.name + " (" + x.members.size + " Kişi)").join('\n');
  message.channel.send("```js\n" + roller + "```")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rol'],
  permLevel: 0
};

exports.help = {
  name: 'roller',
  buyukIsim: 'Roller',
  kategori: 'Genel', 
  description: 'Sunucudaki tüm rolleri idsiyle gösterir.',
  usage: 'roller'
};