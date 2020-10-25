const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
  let x;
  let x2;
  let x3;
  let x4;
  let x5;
  let x6;
  let x7;
  let x8;
  let x9;
  let x10;
  let x11;
  let x12;
  let x13;
  let x14;
  let x15;
  let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
      let wrong = client.emojis.cache.find(emoji => emoji.name === "wrong") 
      let check = client.emojis.cache.find(emoji => emoji.name === "check") 
  let yetki_var = `[${client.emojis.cache.find(emoji => emoji.name === "check")}]`
  let yetki_yok = `[${client.emojis.cache.find(emoji => emoji.name === "wrong")}]`

  if (message.guild.member(user).hasPermission("ADMINISTRATOR"))
    x = yetki_var;
  if (!message.guild.member(user).hasPermission("ADMINISTRATOR"))
    x = yetki_yok;
 
  if (message.guild.member(user).hasPermission("VIEW_AUDIT_LOG"))
    x2 = yetki_var;
  if (!message.guild.member(user).hasPermission("VIEW_AUDIT_LOG"))
    x2 = yetki_yok;
 
  if (message.guild.member(user).hasPermission("MANAGE_GUILD"))
    x3 = yetki_var;
  if (!message.guild.member(user).hasPermission("MANAGE_GUILD"))
    x3 = yetki_yok;
 
  if (message.guild.member(user).hasPermission("MANAGE_ROLES"))
    x4 = yetki_var;
  if (!message.guild.member(user).hasPermission("MANAGE_ROLES"))
    x4 = yetki_yok;
 
  if (message.guild.member(user).hasPermission("MANAGE_CHANNELS"))
    x5 = yetki_var;
  if (!message.guild.member(user).hasPermission("MANAGE_CHANNELS"))
    x5 = yetki_yok;
 
  if (message.guild.member(user).hasPermission("KICK_MEMBERS"))
    x6 = yetki_var;
  if (!message.guild.member(user).hasPermission("KICK_MEMBERS"))
    x6 = yetki_yok;
 
  
  if (message.guild.member(user).hasPermission("BAN_MEMBERS"))
    x7 = yetki_var;
  if (!message.guild.member(user).hasPermission("BAN_MEMBERS"))
    x7 = yetki_yok;
 
  if (message.guild.member(user).hasPermission("MANAGE_MESSAGES"))
    x8 = yetki_var;
  if (!message.guild.member(user).hasPermission("MANAGE_MESSAGES"))
    x8 = yetki_yok;
 
  if (message.guild.member(user).hasPermission("MANAGE_NICKNAMES"))
    x9 = yetki_var;
  if (!message.guild.member(user).hasPermission("MANAGE_NICKNAMES"))
    x9 = yetki_yok;
 
  if (message.guild.member(user).hasPermission("MANAGE_EMOJIS"))
    x10 = yetki_var;
  if (!message.guild.member(user).hasPermission("MANAGE_EMOJIS"))
    x10 = yetki_yok;
 
  if (message.guild.member(user).hasPermission("MANAGE_WEBHOOKS"))
    x11 = yetki_var;
  if (!message.guild.member(user).hasPermission("MANAGE_WEBHOOKS"))
    x11 = yetki_yok;
 
  if (message.guild.member(user).hasPermission("MENTION_EVERYONE"))
    x12 = yetki_var;
  if (!message.guild.member(user).hasPermission("MENTION_EVERYONE"))
    x12 = yetki_yok;
 
  if (message.guild.member(user).hasPermission("PRIORITY_SPEAKER"))
    x13 = yetki_var;
  if (!message.guild.member(user).hasPermission("PRIORITY_SPEAKER"))
    x13 = yetki_yok;
 
  if (message.guild.member(user).hasPermission("CHANGE_NICKNAME"))
    x14 = yetki_var;
  if (!message.guild.member(user).hasPermission("CHANGE_NICKNAME"))
    x14 = yetki_yok;
 
  if (message.guild.member(user).hasPermission("MOVE_MEMBERS"))
    x15 = yetki_var;
  if (!message.guild.member(user).hasPermission("MOVE_MEMBERS"))
    x15 = yetki_yok;
 
  const embed = new Discord.MessageEmbed()
    .setColor("#00000f")
    .setAuthor(message.guild.name + ' Sunucusundaki Yetkilerin', message.guild.iconURL())
   .setThumbnail(user.avatarURL())
    .setDescription(`\n**${user.tag}** adlı kullanıcının yetkileri gösteriliyor. Bu yetkilerin durumu kullanıcının sahip olduğu rollerin yetkilerine bakılarak elde edilir.\n
${x} Yönetici 
${x3} Sunucuyu Yönet
${x4} Rolleri Yönet
${x5} Kanalları Yönet
${x8} Mesajları Yönet
${x6} Üyeleri At 
${x7} Üyeleri Yasakla
${x9} Kullanıcı Adlarını Yönet
${x10} Emojileri Yönet 
${x12} Herkesten Bahset 
`)
 message.channel.send(embed)
};
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["izinler", "yetkilerim"],
 permLevel: 0,
};
 
exports.help = {
 name: "yetkiler",
  buyukIsim: 'Yetkiler',
  kategori: 'Genel', 
 description: "Sizin/girilen kişinin yetkilerini gösterir.",
 usage: "yetkiler [@kullanıcı]"
};
