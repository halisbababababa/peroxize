const Discord = require('discord.js');


exports.run = function(client, message, args) {

    const tavsiye = args.join(" ").slice(0);
    const tavsiyeKanal = client.channels.cache.get('753928893446094919')
    if(!tavsiye) return message.channel.send("Bir öneri/tavsiye girmelisiniz.")
    tavsiyeKanal.send(new Discord.MessageEmbed()
    .setColor("#00000f")
    .setAuthor(`${message.author.username} tarafından yapılan öneri`, message.author.avatarURL())
    .setDescription(tavsiye)
    .setFooter("Öneri yapmak için !öneri komutunu kullanın.")).then(msg => {msg.react("✅").then(r => msg.react("❌")); 
    message.channel.send("Öneriniz başarıyla <#753928893446094919> kanalına iletildi.") 
})};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["tavsiye"],
  permLevel: 0 
};

exports.help = {
  name: 'öneri',
  description: 'Sunucu için öneri yaparsınız.',
  usage: 'öneri [öneri]'
};