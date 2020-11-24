
const { default_prefix } = require("./config.json");
const discord = require("discord.js"); //Gonna use Discord.js Module xD
const client = new discord.Client({
  disableEveryone: true // what does this disable thing do?
});

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


bot.on('guildMemberAdd', async member => {

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

// Login the bot
client.login(process.env.TOKEN);