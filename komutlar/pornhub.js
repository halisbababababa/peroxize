const Discord = require("discord.js");
var jimp = require('jimp');

exports.run = async (client, message, args) => {
  
let yazı = args.slice(0).join(" ")
let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
      let wrong = client.emojis.cache.find(emoji => emoji.name === "wrong") 
      let check = client.emojis.cache.find(emoji => emoji.name === "check") 
if (!yazı) return message.channel.send(`${wrong} Bir yazı girmelisin.`)

let font = await jimp.loadFont(jimp.FONT_SANS_16_WHITE) 
let avatar = await jimp.read(user.avatarURL({format: "png", size: 2048})) 

jimp.read('https://cdn.discordapp.com/attachments/738534664829927584/738559985604231192/amkHALITI.png').then(img => { 
    avatar.resize(380, 380)
    let buffer = img.print(font, 20, 510, yazı)
        .composite(avatar, 190, 85)
        .getBuffer(jimp.MIME_PNG, (err, buffer) => {
            let attachment = new Discord.MessageAttachment(buffer, "Welocme.png");
            message.channel.send(attachment)
        });  
});}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ph"],
  permLevel: 0
};

module.exports.help = {
  name: 'pornhub',
  buyukIsim: 'Pornhub',
  kategori: 'Resim', 
  description: 'Pornhubda bir içerik üretirsiniz.',
  usage: 'pornhub [@kullanıcı] [yazı]'
};