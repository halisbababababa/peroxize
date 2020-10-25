const Discord = require('discord.js');


exports.run = function(client, message, args) {

    const tavsiye = args.join(" ").slice(0);
    const tavsiyeKanal = client.channels.cache.get('753928893446094919')
    if(!tavsiye) return message.channel.send("Bir hata/bug girmelisiniz.")
    let embed = new Discord.MessageEmbed()
    .setColor("#00000f")
    .setAuthor(`${message.author.username} tarafından yapılan bildiri`, message.author.avatarURL())
    .setDescription(tavsiye)
    .setFooter("Hata bildirisi yapmak için !hata komutunu kullanın.")
    tavsiyeKanal.send(embed)
    message.channel.send("Hata bildiriniz başarıyla <#753928893446094919> kanalına iletildi.")
}

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["şikayet", "bug"],
  permLevel: 0 
};

exports.help = {
  name: 'hata',
  description: 'Sunucu için hata bildirisi yaparsınız.',
  usage: 'hata [hata]'
};