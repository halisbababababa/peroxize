const Discord = require('discord.js');

exports.run = async (client, message, args)=> {

let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;

let avatar = user.displayAvatarURL({dynamic: true, size: 1024})
if(avatar.endsWith(".gif?size=1024")) {

let embed = new Discord.MessageEmbed()
.setAuthor(user.tag + '', user.avatarURL())
.setDescription(`**[[PNG]](${user.avatarURL({ format: 'png', dynamic: false, size: 1024 })})** | **[[JPEG]](${user.avatarURL({ format: 'jpeg', dynamic: false, size: 1024 })})** | **[[GIF]](${user.avatarURL({ format: 'gif', dynamic: true, size: 1024 })})** | **[[WEBP]](${user.avatarURL({ format: 'webp', dynamic: false, size: 1024 })})**`)
.setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
.setColor("#00000f")
message.channel.send(embed)

} else {

  let embed = new Discord.MessageEmbed()
.setAuthor(user.tag + '', user.avatarURL())
.setDescription(`**[[PNG]](${user.avatarURL({ format: 'png', dynamic: true, size: 1024 })})** | **[[JPEG]](${user.avatarURL({ format: 'jpeg', dynamic: true, size: 1024 })})** | **~~[GIF]~~** | **[[WEBP]](${user.avatarURL({ format: 'webp', dynamic: true, size: 1024 })})**`)
.setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
.setColor("#00000f")
message.channel.send(embed)

}

}

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  buyukIsim: 'Avatar',
  kategori: 'Genel',
  description: 'Sizin/girilenin avatarınızı gösterir.',
  usage: 'avatar [@kullanıcı]'
};