const Discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {


   if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Bu komudu kullanabilmek için `Üyeleri Engelle` yetkisine sahip olmalısın.")
   if (!args[0]) return message.channel.send(`Yasaklanacak birinin idsini girmelisin.`)
   let reason = args.slice(1).join(' ') || "Belirtilmemiş.";
   let user = (args[0])

   message.guild.fetchBans().then(bans => {if (bans.has(user)) return message.channel.send(`Bu kullanıcı zaten bu sunucudan yasaklanmış.`)
   message.guild.members.ban(user, { reason : `Sebep: ${reason} | Yetkili: ${message.author.tag} - ${message.author.id}`}).then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       let embed = new Discord.MessageEmbed()
                      .setDescription(`**${user.tag}** adlı kişi başarıyla sunucudan yasaklandı.\nSebep: ` +  reason)
                      .setColor("#00000f")
                      message.channel.send(embed)
                   })
                   .catch(error => {
                       message.channel.send(`Geçersiz bir ID girdiniz, lütfen tekrar deneyin.`);
                       console.error(error);
                   });
           });
   }

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['force-ban', 'banid'],
   permLevel: 0
 
};
 
exports.help = {
  name: 'forceban',
  buyukIsim: 'Force Ban',
  kategori: 'Yetkili', 
  description: `Girilen id'yi sunucuda olmasada yasaklar.`,
  usage: 'forceban [id] [sebep]'
};
