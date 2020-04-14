const eris = require('eris');
const ErisJSON = require('eris-json');
const config = require('./config.js');
var frases = require('./quotesArray.json')

const bot = new eris.Client(config.token);


bot.on('ready', () => {
   console.log('Conectado y listo.');
});

var randomQuote = frases[Math.floor(Math.random() * frases.length)];
var display = JSON.stringify(randomQuote.quote);

bot.on('messageCreate', (msg) => {
  if (msg.content === 'Yo te invoco') {
    var interval = setInterval(function(){
        bot.createMessage(msg.channel.id, mensaje)
    },  25200000);
} else if  (msg.content === 'Maiq dime una frase') {
  bot.createMessage(msg.channel.id, mensaje);
}});

var mensaje =  {embed: {
    description: (display),
    color: 0x674EA7,
    title: `M'aiq dice:`
  }}

bot.on('error', err => {
   console.warn(err);
});

bot.connect();


