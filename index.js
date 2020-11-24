
const { default_prefix } = require("./config.json");
const discord = require("discord.js"); //Gonna use Discord.js Module xD
const client = new discord.Client({
  disableEveryone: true // what does this disable thing do?
});

const profanity = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "clitoris", "clits", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cokmuncher", "coksucka", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "xrated", "xxx"];





const db = require("quick.db"); //WE WILL BE USING QUICK.DB
const { addexp } = require("./handlers/xp.js");
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
  //When bot is ready
  console.log("I am Ready to Go!");
  function status() {
    client.user.setActivity(`&help | ${client.guilds.cache.size} Servers.`);
  }
  setInterval(status, 3)
});
client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

//IS URL FUNCTION - START

function is_url(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }

}

//FINISH


//STOP
client.on("message", async message => {
  if (message.author.bot) return;
  //START




  if (!message.member.hasPermission("ADMINISTRATOR")) {

    if (is_url(message.content) === true) {
      message.delete()
      return message.channel.send("You can not send link here :/")
    }





  }

  //END
  if (!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let cmdx = db.get(`cmd_${message.guild.id}`)

  if (cmdx) {
    let cmdy = cmdx.find(x => x.name === cmd)
    if (cmdy) message.channel.send(cmdy.responce)
  }

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));



  // If a command is finally found, run the command
  if (command) command.run(client, message, args);

  return addexp(message);
}); //All codes link in description

//GONNA USE EVENT HERE
client.on('guildMemberAdd', async member => {

  let wChan = db.fetch(`welcome_${member.guild.id}`)

  if (wChan == null) return;

  if (!wChan) return;

  let font64 = await jimp.loadFont(jimp.FONT_SANS_64_WHITE)
  let bfont64 = await jimp.loadFont(jimp.FONT_SANS_64_WHITE)
  let mask = await jimp.read('https://i.imgur.com/552kzaW.png')
  let welcome = await jimp.read('https://cdn.discordapp.com/attachments/764408078363525143/780647928364007424/Desktop_Wallpaper_Space-711121.jpg')

  jimp.read(member.user.displayAvatarURL({ format: 'png' })).then(avatar => {
      avatar.resize(200, 200)
      mask.resize(200, 200)
      avatar.mask(mask)
      welcome.resize(1000, 300)

      welcome.print(font64, 265, 55, `Welcome ${member.user.username}`)
      welcome.print(bfont64, 265, 125, `To ${member.guild.name}`)
      welcome.print(font64, 260, 190, `Member #${member.guild.memberCount}`)
      welcome.composite(avatar, 40, 55).write('Welcome2.png')
      try {
          member.guild.channels.cache.get(wChan).send(``, { files: ["Welcome2.png"] })
      } catch (e) {
        
      }
  })
      var r = member.guild.roles.cache.find(r => r.name === 'Community');
      if (!r) return;
      member.roles.add(r)

});
client.on('guildMemberRemove', async member => {

  let wChan = db.fetch(`welcome_${member.guild.id}`)

  if (wChan == null) return;

  if (!wChan) return;

  let font64 = await jimp.loadFont(jimp.FONT_SANS_64_WHITE)
  let bfont64 = await jimp.loadFont(jimp.FONT_SANS_64_WHITE)
  let mask = await jimp.read('https://i.imgur.com/552kzaW.png')
  let welcome = await jimp.read('https://cdn.discordapp.com/attachments/764408078363525143/780647928364007424/Desktop_Wallpaper_Space-711121.jpg')

  jimp.read(member.user.displayAvatarURL({ format: 'png' })).then(avatar => {
      avatar.resize(200, 200)
      mask.resize(200, 200)
      avatar.mask(mask)
      welcome.resize(1000, 300)

      welcome.print(font64, 265, 55, `Bye Bye ${member.user.username}`)
      welcome.print(bfont64, 265, 125, `He/She left ${member.guild.name}`)
      welcome.print(font64, 260, 190, `You now have ${member.guild.memberCount} members `)
      welcome.composite(avatar, 40, 55).write('Welcome2.png')
      try {
          member.guild.channels.cache.get(wChan).send(``, { files: ["Welcome2.png"] })
      } catch (e) {
        
      }
  })
});


client.on('message', async message => {
  let prefix;
  if (message.author.bot || message.channel.type === "dm") return;
      try {
          let fetched = await db.fetch(`prefix_${message.guild.id}`);
          if (fetched == null) {
              prefix = PREFIX
          } else {
              prefix = fetched
          }
      } catch (e) {
          console.log(e)
  };

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let messageFetch = db.fetch(`guildMessages_${message.guild.id}`)
  if (messageFetch === null) return;

  db.add(`messages_${message.guild.id}_${message.author.id}`, 1)
  let messagefetch = db.fetch(`messages_${message.guild.id}_${message.author.id}`)

  let messages;
  if (messagefetch == 0) messages = 0; //Level 0
  else if (messagefetch == 100) messages = 100; // Level 1
  else if (messagefetch == 200) messages = 200; // Level 2
  else if (messagefetch == 300) messages = 300; // Level 3
  else if (messagefetch == 400) messages = 400; // Level 4
  else if (messagefetch == 500) messages = 500; // Level 5
  else if (messagefetch == 600) messages = 600; // Level 6
  else if (messagefetch == 700) messages = 700; // Level 7
  else if (messagefetch == 800) messages = 800; // Level 8
  else if (messagefetch == 900) messages = 900; // Level 9
  else if (messagefetch == 1000) messages = 1000; // Level 10
  else if (messagefetch == 1100) messages = 1100; // Level 11
  else if (messagefetch == 1200) messages = 1200; // Level 12
  else if (messagefetch == 1300) messages = 1300; // Level 13
  else if (messagefetch == 1400) messages = 1400; // Level 14
  else if (messagefetch == 1500) messages = 1500; // Level 15
  else if (messagefetch == 1600) messages = 1600; // Level 16
  else if (messagefetch == 1700) messages = 1700; // Level 17
  else if (messagefetch == 1800) messages = 1800; // Level 18
  else if (messagefetch == 1900) messages = 1900; // Level 19
  else if (messagefetch == 2000) messages = 2000; // Level 20
  else if (messagefetch == 2100) messages = 2100; // Level 21
  else if (messagefetch == 2200) messages = 2200; // Level 22
  else if (messagefetch == 2300) messages = 2300; // Level 23
  else if (messagefetch == 2400) messages = 2400; // Level 24
  else if (messagefetch == 2500) messages = 2500; // Level 25
  else if (messagefetch == 2600) messages = 2600; // Level 26
  else if (messagefetch == 2700) messages = 2700; // Level 27
  else if (messagefetch == 2800) messages = 2800; // Level 28
  else if (messagefetch == 2900) messages = 2900; // Level 29
  else if (messagefetch == 3000) messages = 3000; // Level 30
  else if (messagefetch == 3100) messages = 3100; // Level 31
  else if (messagefetch == 3200) messages = 3200; // Level 32
  else if (messagefetch == 3300) messages = 3300; // Level 33
  else if (messagefetch == 3400) messages = 3400; // Level 34
  else if (messagefetch == 3500) messages = 3500; // Level 35
  else if (messagefetch == 3600) messages = 3600; // Level 36
  else if (messagefetch == 3700) messages = 3700; // Level 37
  else if (messagefetch == 3800) messages = 3800; // Level 38
  else if (messagefetch == 3900) messages = 3900; // Level 39
  else if (messagefetch == 4000) messages = 4000; // Level 40
  else if (messagefetch == 4100) messages = 4100; // Level 41
  else if (messagefetch == 4200) messages = 4200; // Level 42
  else if (messagefetch == 4300) messages = 4300; // Level 43
  else if (messagefetch == 4400) messages = 4400; // Level 44
  else if (messagefetch == 4500) messages = 4500; // Level 45
  else if (messagefetch == 4600) messages = 4600; // Level 46
  else if (messagefetch == 4700) messages = 4700; // Level 47
  else if (messagefetch == 4800) messages = 4800; // Level 48
  else if (messagefetch == 4900) messages = 4900; // Level 49
  else if (messagefetch == 5000) messages = 5000; // level 50

  if (!isNaN(messages)) {
      db.add(`level_${message.guild.id}_${message.author.id}`, 1)
      let levelfetch = db.fetch(`level_${message.guild.id}_${message.author.id}`)

      let levelembed = new MessageEmbed()
          .setColor('00FFEC')
          .setDescription(`**${message.author}, You Have Leveled Up To Level ${levelfetch}**`)
          .setFooter(`&disablexp To Disable Level Up Messages`)
      message.channel.send(levelembed);
  };
});
// Login the bot
client.login(process.env.TOKEN);