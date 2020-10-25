const Discord = require('discord.js');
const Gamedig = require('gamedig');

exports.run = function(client, message, args) {

Gamedig.query({
    type: 'csgo',
    host: '185.243.182.20:27015'
    }).then((state) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Sunucu Bilgileri")
    .setColor("#00000f")
    .setDescription("Bağlanmak için sunucu ismine tıklayabilirsiniz.")
    .setFooter("Toplam Oyuncu: " + state.raw.numplayers)
    .addField("Sunucu", "[**HNS PRE**](https://steam://connect/185.243.182.20:27015)\n[**HNS NOPRE**](https://steam://connect/185.243.182.20:27015)\n[**KREEDZ PRE**](https://steam://connect/185.243.182.20:27015)", true)
    .addField("Harita", state.map + "\nYAKINDA!\nYAKINDA!", true)
    .addField("Oyuncular", `${state.raw.numplayers}/23` + "\nYAKINDA!\nYAKINDA!", true)
    message.channel.send(embed)
 })
}    



exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["ip", "server", "servers"],
  permLevel: 0 
};

exports.help = {
  name: 'sunucular',
  description: 'Sunucularımızın durumlarını, bilgilerini gösterir.',
  usage: 'sunucular'
};