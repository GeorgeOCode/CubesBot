const Discord = require ("discord.js")
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`${bot.user.tag} olarak giriş yapıldı!`);
});

bot.on('message', msg => {
  if (msg.content === '!sitemiz') {
    msg.reply('CubesCom Sitemizin Linki Burada: sites.google.com/view/cubescom- ');
  }
});
bot.login(process.env.token);