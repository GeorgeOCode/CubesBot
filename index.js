const Discord = require ("discord.js")
const bot = new Discord.Client();

bot.on('ready', () => {
  bot.user.setActivity("Cubescom Özel | George O' Land")
  type: "PLAYING"
  console.log(`${bot.user.tag} olarak giriş yapıldı!`);
});

bot.on('message', msg => {
  if (msg.content === '!sitemiz') {
    msg.reply('CubesCom Sitemizin Linki Burada: sites.google.com/view/cubescom- ');
  }
});
bot.login(process.env.token);