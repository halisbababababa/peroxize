const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents

exports.run = function(client, message, args) {

    var islem = args.join(' ');


    if (!islem) return message.channel.send(`Bir işlem girmelisin.`)
    else { 
    let sonuc;
        try {
            sonuc = math.eval(islem)
        } catch(err) {
            message.channel.send('Hatalı işlem: **' + err + "**")
        }

        let embed = new Discord.MessageEmbed()
        .setColor("#00000f")
        .addField('İşlem', "```" + islem + "```")
        .addField('Sonuç', "```" + sonuc + "```")
        message.channel.send(embed)
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hesap'],
  permLevel: 0
};

exports.help = {
  name: 'hesapla',
  buyukIsim: 'Hesapla',
  kategori: 'Genel', 
  description: 'Girilen işlemi otomatik olarak hesaplar.',
  usage: 'hesapla [işlem]'
};
