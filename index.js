const discord = require("discord.js");
const client = new discord.Client();

client.on('ready', () => {
  client.user.setActivity("-yardım | George O' Land ve CubesCom")
  type: "PLAYING"
  console.log(`${client.user.tag} olarak giriş yapıldı!`);
});

client.on('message', msg => {
  if (msg.content === '-sitemiz') {
    msg.channel.send(`<@${msg.author.id}> ziyaret edersen sevinirim :D \nhttps://sites.google.com/view/cubescom-`);
  }
});
client.on('message', msg => {
  if (msg.content === '-yardım') {
    msg.channel.send(`\n***Tüm Komutlar:*** \n**-sitemiz** = CubesCom Sitemizin Linkini Gönderir \n**-pf** = Avatarınızı Gösterir \n**-başlat** = RPG Oyununa Başlar! \n**-eğlence, -eğlence-1, -eğlence-2 ve -eğlence-3** = Eğlenme Garantili 4 Komut\n**-dans** = Hadi Dans! \n-**sarılalım** = Hadi Sarılalım! \n<@${msg.author.id}> işte komutlar bu kadardı!`);
  }
});
client.on('message', message => {
  if (message.content === '-pf') {
    message.channel.send(message.author.displayAvatarURL());
  }
});
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'gelgit');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});
client.on("message", (msg) => {
  if (msg.content === "-başlat") {
    msg.channel.send("https://imgur.com/awank9Z.png")
  }
})
client.on("message", (msg) => {
  if (msg.content === "C") {
    msg.reply("Çok korkaksın! sana oyun yok!")
  }
})
client.on("message", (msg) => {
  if (msg.content === "B") {
    msg.reply("Normal Bir Kişiliğin olduğu için günlük bir aktivite yapmak istiyorsun! Ne Yapacaksın? -volta-at  -kömürlükte-koşuştur")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-volta-at") {
    msg.reply("Gezdin gezdin ve gezdin en sonda da bezdin şimdi ise karşına sahibin karşına çıktı! -peşinden-git -annenle-uğraş")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-annenle-uğraş") {
    msg.reply("Annenle uğraştın ve onun kuyruğunu yakalamaya çalıştın fakat o sana tepki vermeyince sıkıldın ve boş boş oturmaya karar verdin. Nereye gideceksin? -kulübe -samanlık")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-samanlık") {
    msg.reply("Samanlıkta oyun oynarken annenin sesini duydun ve kulübeye geri döndün! -yat -yemek-ye")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-yat") {
    msg.reply("Yattın ve kardeşlerinle beraber uyudun...")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-peşinden-git") {
    msg.reply("Sahibinle beraber oyun oynadın ve ardından oturmaya karar verdin! Nerede oturacaksın? -sahibinin-yanı -kulübe")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-kulübe") {
    msg.reply("Kulübeye gittin ve oturmak yerine uyuyakaldın!")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-sahibinin-yanı") {
    msg.reply("Oracıkta boş boş oturdun...")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-kömürlükte-koşuştur") {
    msg.reply("Tamam o zaman bir yer seç! -boruların-üstü -odun-kasası ")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-boruların-üstü") {
    msg.reply("boruların üstüne çıktın ve plastik bantka oynadın ve orada oturdun! -orada-kal -yemek-ye")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-orada-kal") {
    msg.reply("Oracıkta uyuyakaldın!")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-yemek-ye") {
    msg.reply("Tıkınırken uyuyakalmışsın :D")
  }
})
client.on("message", (msg) => {
  if (msg.content === "A") {
    msg.reply("Hareketli Bir Kişiliğin olduğu için oyun oynamak istiyorsun ve dışarı çıkmaya karar veriyorsun! Şimdi nereye gideceksin? -kapının-önü  -çimenlik")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-kapının-önü") {
    msg.reply("Kapının önündesin ve sahibin seninle oynamaya geldi! -oyun-oyna  -otur")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-oyun-oyna") {
    msg.reply("Keyifle oyun oynadın ve ardından kulübene gittin! -kardeşlerinle-oyna -uyu")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-kardeşlerinle-oyna") {
    msg.reply("Kardeşlerinle oyun oynamak istedin fakat onlar uyuyordu ve sen de uyudun!")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-uyu") {
    msg.reply("Uyudun işte!")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-otur") {
    msg.reply("Gün Boyunca oturdun ve ardından kulübene gittin! -oyuna-devam -uyu")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-oyuna-devam") {
    msg.reply("Kardeşlerinle oyun oynadın fakat tam o sırada sahibin geldi ve seni eline aldı! -kaç")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-kaç") {
    msg.reply("Kaçamadın fakat sahibin seni düşünüp seni geri bıraktı... Gün boyu oyun oynadın ve yorulduğun için kapının önüne geçip uyudun")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-çimenlik") {
    msg.reply("Çimenlerin arasında gördüğün böceklere saldırdın fakat yoruldun! -otur  -devam-et")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-devam-et") {
    msg.reply("Çok yoruldun ve uyuya kaldın tekrar uyandığında ise kardeşlerin arka tarafta oyun oynuyordu! -katıl -boşver")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-katıl") {
    msg.reply("Katıldın fakat arka tarafta sırtına kene yapıştı! Neyse ki 1 gün sonra kene patladı")
  }
})
client.on("message", (msg) => {
  if (msg.content === "-boşver") {
    msg.reply("Boşverdin ve uyudun!")
  }
})
client.on("message", msg => {
    if (msg.content.toLowerCase() === "bb") {
      msg.channel.send("Hey! .Bye Bye!");
    }
  });
  client.on("message", msg => {
    if (msg.content.toLowerCase() === "-dans") {
      msg.channel.send("https://tenor.com/view/hacinin-salgami-hacininsalgami-dans-haci-gif-14576247")
    }
  });
  client.on("message", msg => {
    if (msg.content.toLowerCase() === "-eğlence") {
      msg.channel.send("https://tenor.com/view/doge-dogeondoge-meme-gif-5586037");
    }
  });
  client.on("message", msg => {
    if (msg.content.toLowerCase() === "-eğlence-1") {
      msg.channel.send("https://giphy.com/gifs/afv-funny-fail-lol-26tP3M3i03hoIYL6M");
    }
  });
  client.on("message", msg => {
    if (msg.content.toLowerCase() === "-eğlence-2") {
      msg.channel.send(
        `<@${msg.author.id}> İngilizler kendi kıllarına ne der?\n\n\n\n **Cevap** = Micheal :D`
      );
    }
  });
  client.on("message", msg => {
    if (msg.content.toLowerCase() === "-eğlence-3") {
      msg.channel.send(
        "http://gph.is/OhElSK"
      );
    }
  });
    client.on("message", msg => {
    if (msg.content.toLowerCase() === "-sarılalım") {
      msg.channel.send(
        "https://gph.is/g/amM2krP"
      );
    }
  });
client.login(process.env.token);