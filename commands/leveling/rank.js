const Discord = require('discord.js')
const Levels = require('discord-xp');
const canvacord = require("canvacord")
module.exports = {
    name: "rank",
    category: "leveling",
    description: "Get your level and xp",
    usage: "rank",
    run: (client, message) => {
     
      const target = message.mentions.users.first() || message.author; // Grab the target.
 
      const user = Levels.fetch(target.id, message.guild.id); // Selects the target from the database.
       
      if (!user) return message.channel.send("You dont have xp, send some messages to earn some!"); // If there isnt such user in the database, we send a message in general.

      const rank = new canvacord.Rank()
          .setAvatar(message.athor.DislayAvatarURL({ dynamic: false, format: 'png' }))
          .setCurrentXP(user.xp)
          .setRequiredXP(neededXp)
          .setStatus(message.member.presence.status)
          .setProgressBar("#FFA500", "COLOR")
          .setUsername(message.author.username)
          .setDiscriminator("0001");
       
      rank.build()
          .then(data => {
              const attachment = new Discord.MessageAttachment(data, "RankCard.png");
              message.channel.send(attachment);
            });
          }
        }