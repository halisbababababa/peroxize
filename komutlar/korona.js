const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const axios = require('axios');

exports.run = async (client, message, args) => {

      let wrong = client.emojis.cache.find(emoji => emoji.name === "wrong") 
      let check = client.emojis.cache.find(emoji => emoji.name === "check") 

            if (!args.length) {
            axios.get('https://corona.lmao.ninja/v2/all')
                .then((response) => {
                    const genel = new Discord.MessageEmbed()
                        .setColor("#00000f")
                        .setAuthor('Dünyadaki covid-19 bilgileri', 'https://images.squarespace-cdn.com/content/v1/5c4085e585ede1f50f94a4b9/1581018457505-JM3FO6WMFN9BGP3IOE8D/ke17ZwdGBToddI8pDm48kL5hQm_JZO5i_9Equza1B-57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URbcWFoTofQNHE0Fe4ADwtkYw2N2aveJw6FaFCcRrQmU3WUfc_ZsVm9Mi1E6FasEnQ/2019-nCoV-CDC-23312_without_background.png')
                        .setDescription('Şuanda dünya genelindeki ülkeler gösteriliyor, belirli bir ülke hakkında bilgi almak için **!korona [ülke-kodu]** komudunu kullanabilirsiniz.')
                        .setThumbnail("https://images.squarespace-cdn.com/content/v1/5c4085e585ede1f50f94a4b9/1581018457505-JM3FO6WMFN9BGP3IOE8D/ke17ZwdGBToddI8pDm48kL5hQm_JZO5i_9Equza1B-57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URbcWFoTofQNHE0Fe4ADwtkYw2N2aveJw6FaFCcRrQmU3WUfc_ZsVm9Mi1E6FasEnQ/2019-nCoV-CDC-23312_without_background.png")
                        .addField(`Toplam Vaka`, response.data.cases, true)
                        .addField(`Toplam Ölüm`, response.data.deaths, true)
                        .addField(`Toplam İyileşen`, response.data.recovered, true)
                        .addField(`Bugünkü Vakalar`, response.data.todayCases, true)
                        .addField(`Bugünkü Ölümler`, response.data.todayDeaths, true)
                        .addField(`Bugünkü İyileşen`, response.data.todayRecovered, true)
                        .addField(`Milyonda Aktif`, response.data.activePerOneMillion, true)
                        .addField(`Milyonda İyileşen`, response.data.recoveredPerOneMillion, true)
                        .addField(`Milyonda Kritik`, response.data.criticalPerOneMillion, true)
                    message.channel.send(genel)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else {
            axios.get(`https://corona.lmao.ninja/v2/countries/${args[0]}`)
                .then((response) => {
                    const ulke = new Discord.MessageEmbed()
                        .setColor("#00000f")
                        .setAuthor(`${response.data.country} covid-19 bilgileri`, "https://images.squarespace-cdn.com/content/v1/5c4085e585ede1f50f94a4b9/1581018457505-JM3FO6WMFN9BGP3IOE8D/ke17ZwdGBToddI8pDm48kL5hQm_JZO5i_9Equza1B-57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URbcWFoTofQNHE0Fe4ADwtkYw2N2aveJw6FaFCcRrQmU3WUfc_ZsVm9Mi1E6FasEnQ/2019-nCoV-CDC-23312_without_background.png")
                        .setThumbnail(response.data.countryInfo.flag)
                        .setDescription(`Şuanda ${response.data.country} ülkesinin bilgileri gösteriliyor, dünya genelindeki bilgileri almak için **!korona** komudunu kullanabilirsiniz.`)
                        .addField(`Toplam Vaka`, response.data.cases, true)
                        .addField(`Toplam Ölüm`, response.data.deaths, true)
                        .addField(`Toplam İyileşen`, response.data.recovered, true)
                        .addField(`Bugünkü Vakalar`, response.data.todayCases, true)
                        .addField(`Bugünkü Ölümler`, response.data.todayDeaths, true)
                        .addField(`Bugünkü İyileşen`, response.data.todayRecovered, true)
                        .addField(`Milyonda Aktif`, response.data.activePerOneMillion, true)
                        .addField(`Milyonda İyileşen`, response.data.recoveredPerOneMillion, true)
                        .addField(`Milyonda Kritik`, response.data.criticalPerOneMillion, true)
                    message.channel.send(ulke)
                })
                .catch((error) => {
          message.channel.send(`${wrong} Girilen ülke geçersiz, lütfen ülkenin ingilizcesini ya da ISO kodunu girin.`)
                    console.log(error);
                });
        }
}
    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["corona", "covid", "virüs"],
  permLevel: 0
};

exports.help = {
  name: 'korona',
  buyukIsim: 'Korona',
  kategori: 'Genel', 
  description: 'Dünyadaki/ülkedeki covid-19 bilgilerini gösterir.',
  usage: 'korona [ülke]'
};