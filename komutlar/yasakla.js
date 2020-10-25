const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

   if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Bu komudu kullanabilmek için `Üyeleri Engelle` yetkisine sahip olmalısın.")
   let reason = args.slice(1).join(' ') || "Belirtilmemiş.";
   
    if (!args[0]) return message.channel.send(`Yasaklanacak birini girmelisin.`)
    let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user
 
    if (!user) return message.channel.send("Geçersiz bir kullanıcı girdiniz, lütfen tekrar deneyin.") 
    let member = message.guild.member(user)
    if (!message.guild.member(user).banable) return message.channel.send("Bu kişi bir yetkili olduğu için yasaklayamıyorum.")

   user.send(`${message.guild.name} adlı sunucuda ${message.author} (${message.author.id}) tarafından yasaklandınız.\n` + "Sebep:```\n" + reason + "```")
   message.guild.members.ban(user, { reason : `Sebep: ${reason} | Yetkili: ${message.author.tag} - ${message.author.id}`})

   let embed = new Discord.MessageEmbed()
   .setDescription(`**${user.tag}** adlı kişi başarıyla sunucudan yasaklandı.\nSebep: ` +  reason)
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
    name: 'yasakla',
    isim: 'Yasakla',
    kategori: 'Yetkili',
    description: 'Girilen kişiyi sunucudan yasaklar.',
    usage: 'yasakla [@kullanıcı] [sebep]'
}
