const Discord = require ("discord.js")
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`${bot.user.tag} olarak giriş yapıldı!`);
});

bot.on('message', message => {
  if (message.content === 'how to embed') {
    const embed = new MessageEmbed()
      .setTitle('A slick little embed')
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription('Hello, this is a slick embed!');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});
bot.on('message', msg => {
  if (msg.content === 'Yazı') {
    msg.reply('Cevap');
  }
});
bot.login(process.env.token);