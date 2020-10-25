const Discord = require('discord.js');
const mapping = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:'
};

'abcdefghjklmnopqrstuvwxyz'.split('').forEach(c => {
	mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`

'ı'.split('').forEach(c => {
	mapping[c] = mapping[c.toUpperCase()] = `🇮`


'ğ'.split('').forEach(c => {
	mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_g:`

'i'.split('').forEach(c => {
	mapping[c] = mapping[c.toUpperCase()] = `:information_source:`

'ç'.split('').forEach(c => {
	mapping[c] = mapping[c.toUpperCase()] = `🇨`

'ö'.split('').forEach(c => {
	mapping[c] = mapping[c.toUpperCase()] = `🇴`

'ü'.split('').forEach(c => {
	mapping[c] = mapping[c.toUpperCase()] = `🇺`;

'ş'.split('').forEach(c => {
	mapping[c] = mapping[c.toUpperCase()] = `🇸`

});
});
});
});
});
});
});
});

exports.run = function(client, message, args) {


	if (args.length < 1) return message.channel.send(`Bir mesaj girmelisin.`)
	message.channel.send(args.join(' ').split('').map(c => mapping[c] || c).join(' '));


}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['emoji-yazı', 'emojiyazı'],
  permLevel: 0 
};

exports.help = {
  name: 'emoji',
  buyukIsim: 'Emoji',
  kategori: 'Eğlence',
  description: 'Yazınız 🇧 🇴 🇾 🇱 🇪 olur.',
  usage: 'emoji [mesaj]'
};