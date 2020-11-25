const Discord = require('discord.js')
const Levels = require('discord-xp');
module.exports = {
    name: "rank",
    category: "leveling",
    description: "Get your level and xp",
    usage: "rank",
    run: async (client, message, args) => {

     
      const target = message.mentions.users.first() || message.author; // Grab the target.
 
      const user = Levels.fetch(target.id, message.guild.id); // Selects the target from the database.
       
      if (!user) return message.channel.send("You dont have xp, send some messages to earn some!"); // If there isnt such user in the database, we send a message in general.

      const levelEmbed = new Discord.MessageEmbed()
      .setTitle('What is your level and xp?')
          .setAvatar(message.athor.DislayAvatarURL({ dynamic: false, format: 'png' }))
          .setDescription('Your levels!')
          .addField(`**${message.author.username}'s Level is:**`, `${user.level}`, true)
          .addField(`**${message.author.username}'s XP!**`, `${user.xp}`, true)
          .setFooter('Send more messages and you will level up and gain xp!')

     message.channel.send(levelEmbed);


            }
          }
      