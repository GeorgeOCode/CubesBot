const Discord = require ("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setActivity("Cubescom Özel | George O' Land")
  type: "PLAYING"
  console.log(`${client.user.tag} olarak giriş yapıldı!`);
});

client.on('message', msg => {
  if (msg.content === '!sitemiz') {
    msg.reply('CubesCom Sitemizin Linki Burada: sites.google.com/view/cubescom- ');
  }
});

client.on('message', msg => {
    if (msg.content === '!sitemiz') {
    msg.reply('message.author.displayAvatarURL());
  }
});

client.login(process.env.token);