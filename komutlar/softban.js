  const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    if (!args[0]) return message.channel.send(`Softban uygulanacak birini girmelisin.`) 

    let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user
    let reason = args.slice(1).join(' ') || "Belirtilmemiş.";

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Bu komudu kullanabilmek için `Üyeleri Engelle` yetkisine sahip olmalısın.")

    if (!user) return message.channel.send("Geçersiz bir kullanıcı girdiniz, lütfen tekrar deneyin.") 
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Bu kişi bir yetkili olduğu için yasaklayamıyorum.")

    var fetched = await message.channel.messages.fetch() 
    .filter(m => m.author.id === user.id)
      .array()
    message.channel.bulkDelete(fetched)
    message.guild.members.ban(user)
    message.guild.members.unban(user)

    user.send(`${message.guild.name} adlı sunucuda ${message.author} (${message.author.id}) tarafından softbanlandınız.\n` + "Sebep:```\n" + reason + "```")
    let embed = new Discord.MessageEmbed()
    .setDescription(`**${user.tag}** adlı kişiye başarıyla softban uygulandı.\nSebep: ` +  reason)
    .setColor("#00000f")
    message.channel.send(embed)
   
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["soft-ban"],
  permlevel: 0
};
exports.help = {
  name: "softban",
  description: "Girilen kullanıcıyı mesajlarını silerek banlar, sonra geri açar.",
  usage: "softban [@kulanıcı]"
};