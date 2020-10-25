const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

  var oyun = [
    "regain hns pre",
  ];

module.exports = client => {
  console.log(`${client.user.username} cevrımcı oldu`);
  client.user.setStatus("online");
  client.user.setActivity("hns sunucusunu", { type: "WATCHING"});
};

