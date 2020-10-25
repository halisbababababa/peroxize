const Discord = require('discord.js');
const cmd = require('discord.js-commando');
const st = require('common-tags');
const slots = ['🍇', '🍊', '🍐', '🍒', '🍋'];

exports.run = function(client, message) {

    var slot1 = slots[Math.floor(Math.random() * slots.length)];
    var slot2 = slots[Math.floor(Math.random() * slots.length)];
    var slot3 = slots[Math.floor(Math.random() * slots.length)];
    var slot4 = slots[Math.floor(Math.random() * slots.length)];
    var slot5 = slots[Math.floor(Math.random() * slots.length)];
    var slot6 = slots[Math.floor(Math.random() * slots.length)];
    var slot7 = slots[Math.floor(Math.random() * slots.length)];
    var slot8 = slots[Math.floor(Math.random() * slots.length)];
    var slot9 = slots[Math.floor(Math.random() * slots.length)];
    var slot10 = slots[Math.floor(Math.random() * slots.length)];
    var slot11 = slots[Math.floor(Math.random() * slots.length)];
    var slot12 = slots[Math.floor(Math.random() * slots.length)];
    
    if (slot4 === slot5 && slot4 === slot6) {
        let embed = new Discord.MessageEmbed()
        .setDescription(`
                🟦🟦🟦🟦🟦
        🟦${slot1}${slot2}${slot3}🟦
       ▶️${slot4}${slot5}${slot6}◀️
       🟦${slot10}${slot11}${slot12}🟦
                🟦🟦🟦🟦🟦\n
        Tebrikler, kazandın!
        `)
        .setColor("#00000f")
        message.channel.send(embed) 
    } else {
        let embed1 = new Discord.MessageEmbed()
        .setDescription(`
                   
                ⬛⬛⬛⬛⬛
        ⬛${slot1}${slot2}${slot3}⬛
       🟥${slot4}${slot5}${slot6}🟥
       ⬛${slot10}${slot11}${slot12}⬛
                ⬛⬛⬛⬛⬛🕹️\n
        Maalesef kaybettin.
        `)  
        .setColor("#00000f")
        message.channel.send(embed1) 

  }
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['slots'],
  permLevel: 0
};

exports.help = {
  name: 'slot', 
  buyukIsim: 'Slot',
  kategori: 'Eğlence', 
  description: 'Slot oyununu oynarsınız.',
  usage: 'slot'
};