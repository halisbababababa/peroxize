const Discord = require('discord.js');
const ayarlar = require('./ayarlar.json');
const shard = new Discord.ShardingManager('./halis.js', { 
    totalShards: 1, 
    token: ayarlar.token 
});

shard.spawn(); 

shard.on('launch', shard => {
  console.log(`${shard.id} ID'li shard başarıyla başlatıldı.`)
});

setTimeout(() => {
    console.log("yeniden basliyor")
    shard.broadcastEval("process.exit()");
}, 21600000);