const Discord = require("discord.js");

exports.run = (client, message, args) => {

  const sayı = Number(args[0]);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.channel.send("Bu komudu kullanabilmek için `Üyeleri At` yetkisine sahip olmalısın.")
    } else {
      if (!sayı) {
        message.channel.send(`Bir sayı girmelisiniz.`)
      } else {
        if (sayı < 101) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(sayı);
        }
        if (sayı > 100 && sayı < 200) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100).then(() => {
            message.channel.bulkDelete(sayı - 100);
          });
        }
        if (sayı == 200) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
        }
        if (sayı > 200 && sayı < 300) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100).then(() => {
            message.channel.bulkDelete(sayı - 200);
          });
        }
        if (sayı == 300) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
        }
        if (sayı > 300 && sayı < 400) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100).then(() => {
            message.channel.bulkDelete(sayı - 300);
          });
        }
        if (sayı == 400) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
        }
        if (sayı > 400 && sayı < 500) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100).then(() => {
            message.channel.bulkDelete(sayı - 400);
          });
        }
        if (sayı == 500) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
        }
        if (sayı > 500 && sayı < 600) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100).then(() => {
            message.channel.bulkDelete(sayı - 500);
          });
        }
        if (sayı == 600) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
        }
        if (sayı > 600 && sayı < 700) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100).then(() => {
            message.channel.bulkDelete(sayı - 600);
          });
        }
        if (sayı == 700) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
        }
        if (sayı > 700 && sayı < 800) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100).then(() => {
            message.channel.bulkDelete(sayı - 700);
          });
        }
        if (sayı == 800) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
        }
        if (sayı > 800 && sayı < 900) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100).then(() => {
            message.channel.bulkDelete(sayı - 800);
          });
        }
        if (sayı == 900) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
        }
        if (sayı > 900 && sayı < 1000) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100).then(() => {
            message.channel.bulkDelete(sayı - 900);
          });
        }
        if (sayı == 1000) {
          message.channel.send(`Başarıyla **${sayı}** adet mesaj silindi.`).then(message => {message.delete({ timeout: 5000 })})
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
        }
        if (sayı > 1000) {
          message.channel.send(`En fazla 1000 adet mesaj silebilirsiniz.`)
        }
      }
    }
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sil"],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  buyukIsim: 'Temizle',
  kategori: 'Yetkili', 
  description: 'Girilen sayı kadar mesaj siler.',
  usage: 'temizle [sayı]'
};