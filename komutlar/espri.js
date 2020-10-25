const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  
      let komedi = client.emojis.cache.get("741081313972453406")
      let espriler = ['Seni görünce; \ngözlerim dolar, \nkulaklarım euro.','Kar üzerinde yürüyen adama ne denir. Karabasan.','Yıkanan Ton’a ne denir? Washington!','Gidenin arkasına bakmayın yoksa geleni göremezsiniz.','+ Oğlum canlılara örnek ver. \n- Kedi, köpek. \n+ Cansızlara örnek ver. \n- Ölü kedi, ölü köpek.','+ Kanka ben banyoya 3 kişi giriyom. \n- Oha nasıl? \n+ Hacı, Şakir ve ben. \n- Defol lan!','+ Kocanızla ortak özelliğiniz ne? \n- Aynı gün evlendik.','+ Evladım ödevini neden yapmadın? \n- Bilgisayarım uyku modundaydı, uyandırmaya kıyamadım.','+ Bizim arkadaş ortamında paranın lafı bile olmaz. \n- Niye ki? \n+ Çünkü hiç birimizin parası yok.','Annemin bahsettiği elalem diye bir örgüt var illuminatiden daha tehlikeli yemin ederim.','+ Acıkan var mı ya? \n- Yok bizde tatlı kan var.','Yılanlardan korkma, yılmayanlardan kork.','+ Baykuşlar vedalaşırken ne der? \n- Bay bay baykuş.','Beni Ayda bir sinemaya götürme, Marsta bir sinemaya götür.','Aaa siz çok terlemişsiniz durun size terlik getireyim.','Aklımı kaçırdım, 100.000TL fidye istiyorum.'];
      let espri = espriler[Math.floor(Math.random() * espriler.length)];
  
      let embed = new Discord.MessageEmbed()
      .setAuthor("İşte yeni bir espri!", "https://cdn.discordapp.com/emojis/741081313972453406.png?v=1")
      .setDescription(espri)
      .setColor("#00000f")
      message.channel.send(embed);
 };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espiri', 'espri-yap', 'yap-espri', 'yapbi-espri'],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  buyukIsim: 'Espri',
  kategori: 'Eğlence', 
  description: 'Rastgele bir espri yapar.',
  usage: 'espri'
};