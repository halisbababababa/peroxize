const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

 
   let wrong = client.emojis.cache.find(emoji => emoji.name === "wrong") 
   let check = client.emojis.cache.find(emoji => emoji.name === "check") 
   if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Bu komudu kullanabilmek için `Üyeleri At` yetkisine sahip olmalısın.")
   
    if (!args[0]) return message.channel.send(`Atılacak birini girmelisin.`)
    let user = message.mentions.users.first() || (args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user
 
    if (!user) return message.channel.send("Geçersiz bir kullanıcı girdiniz, lütfen tekrar deneyin.") 
    let member = message.guild.member(user)
    if (!message.guild.member(user).kickable) return message.channel.send("Bu kişi bir yetkili olduğu için yasaklayamıyorum.")

   user.send(`${message.guild.name} adlı sunucuda ${message.author} (${message.author.id}) tarafından atıldınız.`)
   member.kick()

   let embed = new Discord.MessageEmbed()
   .setDescription(`**${user.tag}** adlı kişi başarıyla sunucudan atıldı.`)
   .setColor("#00000f")
   message.channel.send(embed)
   }


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ban', 'yasak'],
    permLevel: 0
}

exports.help = {
    name: 'at',
    buyukIsim: 'At',
    kategori: 'Yetkili',
    description: 'Girilen kişiyi sunucudan atar.',
    usage: 'at [@kullanıcı]'
}
