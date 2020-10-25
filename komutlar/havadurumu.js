const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    if (!args[0]) {
        message.channel.send(`Bir şehir girmelisin.`)
        return
    }

    const konum = args.join(" ")
    message.channel.send("", {
        files: [`http://wttr.in/${konum}_0tqp_lang=tr.png`]
    })
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hava', 'hava-durumu'],
    permLevel: 0
}

exports.help = {
  name: 'havadurumu',
  buyukIsim: 'Hava Durumu',
  kategori: 'Genel', 
  description: 'Girilen şehrin hava durumu bilgilerini gösterir.',
  usage: 'havadurumu [şehir]'
};
