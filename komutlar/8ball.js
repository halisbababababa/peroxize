const Discord = require('discord.js');

exports.run = function(client, message, args) {

        if (message.content == "halis baba") {
      let cevap = "babalarin babasi Halis"
      message.channel.send(cevap)} 
      else {
      let soru = args.slice(0).join(" ")
      if(!soru) return message.channel.send(`Bir soru girmelisin.`)
      let cevaplar = ['Evet.', 'Hmm, olabilir..', 'B-bu dediğin imkansız.', 'Hayır.'];
      let cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
      message.channel.send(cevap)  
      }
}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['sekizball'],
  permLevel: 0 
};

exports.help = {
  name: '8ball',
  buyukIsim: '8ball',
  kategori: 'Eğlence', 
  description: 'Sorularınıza sihirle cevap verir.',
  usage: '8ball [soru]'
};