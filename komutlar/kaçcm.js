const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  
   let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
   message.channel.send('a-abu ne dion -_-').then(message => {
message.delete({ timeout: 200 })
   })
   var yarraklar = [`Hey **${user.tag}**, seninki tamı tamına **20** cm! :eggplant:\n\n8=========D` + " (`Hmm..`)", `Hey **${user.tag}**, seninki tamı tamına **100** km! :eggplant:\n\n8=======================================================================D` + " (`BU BİR DÜNYA REKORU!?!?!?!`)", `Hey **${user.tag}**, seninki tamı tamına **100** cm! :eggplant:\n\n8=================================D` + " (`GÖZLERİME İNANAMIYORUM!`)", `Hey **${user.tag}**, seninki tamı tamına **31** cm! :eggplant:\n\n8============D` + " (`Anlayan anladı`)", `Hey **${user.tag}**, seninki tamı tamına **1** cm! :eggplant:\n\n8=D` + " (`D-dostum 😳`)", `Hey **${user.tag}**, seninki tamı tamına **78** cm! :eggplant:\n\n8===================D` + " (`Yolda nasıl yürüyorsun!?!`)", `Hey **${user.tag}**, seninki tamı tamına **10** cm! :eggplant:\n\n8=======D` + " (`:(`)" , `Hey **${user.tag}**, seninki tamı tamına **32** cm! :eggplant:\n\n8=============D` + " (`Ortalamanın üstünde!`)"];
      var yarrak = yarraklar[Math.floor(Math.random() * yarraklar.length)];
            message.channel.send(`${yarrak}`);
 };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaçcm', 'cmkaç', 'kaç-cm', 'cm-kaç', 'penis', 'yarrak'],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  buyukIsim: 'Kaçcm',
  kategori: 'Eğlence', 
  description: 'a-abu ne dion -_-',
  usage: 'kaçcm'
};