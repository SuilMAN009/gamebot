const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";
client.on('message',fkk => {
    if (fkk.content == "!fast") {
        var x = ["IixRp_",
"DeathGames",
"زيرو كنج",
"أرض الأحلام",
"ألبرازيل",
"العراق",
"ألمملكة ألعربية ألسعودية",
"القسطنطينية",
"النهاية",
"امازون",
"جافاسكربت",
"سهله مو صعبه",
"طبق رطب مرق بقر",
"متجر",
"شجرة الأوغيري",
"عش العصفور",
"هلا بلخميس",
"الحوت الأزرق",
 "اكس ار بي العب واحد بالعالم",
];
        var x2 = ['IixRp_',
        "DeathGames",
        "زيرو كنج",
        "أرض الأحلام",
		"ألبرازيل",
		"العراق",
		"ألمملكة ألعربية ألسعودية",
		"القسطنطينية",
		"النهاية",
		"امازون",
		"جافاسكربت",
		"سهله مو صعبه",
		"طبق رطب مرق بقر",
		"متجر",
		"شجرة الأوغيري",
		"عش العصفور",
		"هلا بلخميس",
		"الحوت الأزرق",
		  "اكس ار بي العب واحد بالعالم",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
       fkk.channel.send(` اول شخص يكتب :  __**${x[x3]}**__
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = fkk.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return fkk.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
           fkk.channel.send(`${collected.first().author} لقد قمت بكتابة الكلمة في الوقت المناسب  `);
        })
        })
    }
})





client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Script By : IixRp_`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : IixRp_ ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`IixRp_ | ${client.guilds.size} ${client.users.size} servers/user`,"http://twitch.tv/YouTube")
client.user.setStatus("dnd")
});



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
