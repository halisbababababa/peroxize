const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  
  if (args[0] == "eğlence") {
    const embed = new Discord.MessageEmbed()
      .setAuthor("Eğlence Menüsü", client.user.avatarURL())
      .setDescription("Bir komutta takılırsanız hakkındaki detaylı bilgi için **!yardım [komut]** komutunu kullanabilirsiniz.\n\n[`!slot`](https://discord.gg/kJtCtP5) - Slot oyununu oynarsınız.\n[`!8ball`](https://discord.gg/kJtCtP5) - Sorularınıza sihirle cevap verir.\n[`!emoji`](https://discord.gg/kJtCtP5) - Yazınız 🇧 🇴 🇾 🇱 🇪 olur.\n[`!espri`](https://discord.gg/kJtCtP5) - Rastgele bir espri yapar.\n[`!pornhub`](https://discord.gg/kJtCtP5) - Pornhubda bir içerik üretirsiniz.\n[`!kaçcm`](https://discord.gg/kJtCtP5) - A-abu ne dion -_-")
      .setFooter(`${client.user.username}` + " © 2020")
      .setColor("#00000f")
      .setThumbnail(client.user.avatarURL())
      .setTimestamp();
    message.channel.send(embed);
    return;
  }

  if (args[0] == "genel") {
    const embed = new Discord.MessageEmbed()
      .setAuthor("Genel Menüsü", client.user.avatarURL())
      .setDescription("Bir komutta takılırsanız hakkındaki detaylı bilgi için **!yardım [komut]** komutunu kullanabilirsiniz.\n\n[`!ip`](https://discord.gg/kJtCtP5) - Sunucularımızın tüm bilgilerini ve iplerini görürsünüz.\n[`!ping`](https://discord.gg/kJtCtP5) - Botun ve mesajların gecikmesini gösterir.\n[`!davet`](https://discord.gg/kJtCtP5) - Peroxize discord bağlantısını gösterir.\n[`!roller`](https://discord.gg/kJtCtP5) - Sunucudaki tüm rolleri idsiyle gösterir.\n[`!yardım`](https://discord.gg/kJtCtP5) - Tüm komutların kategorilerini gösterir.\n[`!avatar`](https://discord.gg/kJtCtP5) - Sizin/etiketlenenin avatarınızı gösterir.\n[`!hesapla`](https://discord.gg/kJtCtP5) - Girilen işlemi otomatik olarak hesaplar.\n[`!emojiler`](https://discord.gg/kJtCtP5) - Sunucudaki tüm emojileri gösterir.\n[`!havadurumu`](https://discord.gg/kJtCtP5) - Girilen şehrin hava durumu bilgilerini gösterir.\n[`!istatistik`](https://discord.gg/kJtCtP5) - Botun güncel istatistiklerini gösterir.\n[`!korona`](https://discord.gg/kJtCtP5) - Dünyadaki/ülkedeki covid-19 bilgilerini gösterir.\n[`!sunucu`](https://discord.gg/kJtCtP5) - Mesajı yazdığınız sunucunun bilgilerini gösterir.\n[`!kullanıcı`](https://discord.gg/kJtCtP5) - Sizin/girilenin kullanıcı bilgilerini gösterir.\n[`!yetkiler`](https://discord.gg/kJtCtP5) - Sizin/girilen kişinin yetkilerini gösterir.")
      .setFooter(`${client.user.username}` + " © 2020")
      .setColor("#00000f")
      .setThumbnail(client.user.avatarURL())
      .setTimestamp();
    message.channel.send(embed);
    return;
  }

  if (args[0] == "anime") {
    const embed = new Discord.MessageEmbed()
      .setAuthor("Anime Menüsü", client.user.avatarURL())
      .setDescription("Bir komutta takılırsanız hakkındaki detaylı bilgi için **!yardım [komut]** komutunu kullanabilirsiniz.\n\n[`!anime`](https://discord.gg/kJtCtP5) - Girilen animeyi MyAnimeListte arar.\n[`!kemonomimi`](https://discord.gg/kJtCtP5) - Rastgele bir kemonomimi resmi gönderir.\n[`!kitsune`](https://discord.gg/kJtCtP5) - Rastgele bir kitsune resmi gönderir.\n[`!neko`](https://discord.gg/kJtCtP5) - Rastgele bir neko resmi gönderir.\n[`!waifu`](https://discord.gg/kJtCtP5) - Rastgele bir waifu resmi gönderir.\n[`!smug`](https://discord.gg/kJtCtP5) - Rastgele bir smug resmi gönderir.\n[`!baka`](https://discord.gg/kJtCtP5) - Rastgele bir baka resmi gönderir.")
      .setFooter(`${client.user.username}` + " © 2020")
      .setColor("#00000f")
      .setThumbnail(client.user.avatarURL())
      .setTimestamp();
    message.channel.send(embed);
    return;
  }

  if (args[0] == "yetkili") {
    const embed = new Discord.MessageEmbed()
      .setAuthor("Yetkili Menüsü", client.user.avatarURL())
      .setDescription("Bir komutta takılırsanız hakkındaki detaylı bilgi için **!yardım [komut]** komutunu kullanabilirsiniz.\n\n[`!yasakla`](https://discord.gg/kJtCtP5) - Girilen kişiyi sunucudan yasaklar.\n[`!softban`](https://discord.gg/kJtCtP5) - Girilen kullanıcıyı mesajlarını silerek banlar, açar.\n[`!forceban`](https://discord.gg/kJtCtP5) - Girilen id'yi sunucuda olmasada yasaklar..\n[`!temizle`](https://discord.gg/kJtCtP5) - Girilen sayı kadar mesaj siler.\n[`!at`](https://discord.gg/kJtCtP5) - Girilen kişiyi sunucudan atar.\n")
      .setFooter(`${client.user.username}` + " © 2020")
      .setColor("#00000f")
      .setThumbnail(client.user.avatarURL())
      .setTimestamp();
    message.channel.send(embed);
    return;
  }

  if (args[0] == "destek") {
    const embed = new Discord.MessageEmbed()
      .setAuthor("Destek Menüsü", client.user.avatarURL())
      .setDescription("Bir komutta takılırsanız hakkındaki detaylı bilgi için **!yardım [komut]** komutunu kullanabilirsiniz.\n\n[`!ticket`](https://discord.gg/kJtCtP5) - Özel bir destek talebi oluşturursunuz.\n[`!kapat`](https://discord.gg/kJtCtP5) - Destek talebinizi kapatırsınız.\n[`!sunucular`](https://discord.gg/kJtCtP5) - Sunucularımızın tüm bilgilerini ve iplerini görürsünüz.\n[`!öneri`](https://discord.gg/kJtCtP5) - Sunucumuza öneri/tavsiye yaparsınız.\n[`!hata`](https://discord.gg/kJtCtP5) - Sunucumuzdaki hataları bildirirsiniz.")
      .setFooter(`${client.user.username}` + " © 2020")
      .setColor("#00000f")
      .setThumbnail(client.user.avatarURL())
      .setTimestamp();
    message.channel.send(embed);
    return;
  }

  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setAuthor("Yardım Menüsü", client.user.avatarURL())
      .setDescription("Peroxize botu sadece ve sadece Peroxize sunucusuna özel olarak yapılmıştır, sadece bu sunucuya özeldir. Bizi tercih ettiğiniz için teşekkür ederiz.\n\n[Discord](https://discord.gg/kJtCtP5) | [Steam Grubu](https://steamcommunity.com/groups/peroxize) | [Mağazamız](https://shopier.com/peroxize/)")
      .addField("Kategoriler","[`!yardım eğlence`](https://discord.gg/kJtCtP5) - Eğlence kategorisinin komutlarını gösterir.\n[`!yardım genel`](https://discord.gg/kJtCtP5) - Genel kategorisinin komutlarını gösterir.\n[`!yardım anime`](https://discord.gg/kJtCtP5) - Anime kategorisinin komutlarını gösterir.\n[`!yardım yetkili`](https://discord.gg/kJtCtP5) - Yetkili kategorisinin komutlarını gösterir.\n[`!yardım destek`](https://discord.gg/kJtCtP5) - Destek kategorisinin komutlarını gösterir.")
      .setFooter(`${client.user.username}` + " © 2020")
      .setColor("#00000f")
      .setThumbnail(client.user.avatarURL())
      .setTimestamp();
    message.channel.send(embed);
    return;
  }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["komutlar", "y"],
  permLevel: 0
};

module.exports.help = {
  name: "yardım",
  buyukIsim: "Yardım",
  kategori: "Genel",
  description: "Yardım kategorileri ve bot bilgi/bağlantıları.",
  usage: "yardım"
};
