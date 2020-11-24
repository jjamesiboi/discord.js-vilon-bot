const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
const { default_prefix } = require('../../config');

m
module.exports = {
  name: "level",
  usage: "level",
  description: "Shows ur level.",
  category: "leveling",
  run: (client, message, args) => {
   
        try {
            let prefix;
            let fetched = await db.fetch(`prefix_${message.guild.id}`)
            if (fetched === null) {
                prefix = default_prefix
            } else {
                prefix = fetched
            }
            let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
            if (!user) return message.channel.send('**Please Enter A Valid User!**')
            if (user.user.bot) return message.channel.send(`**Bot's Dont Have XP Level, LOL**`);


            let xp = db.fetch(`messages_${message.guild.id}_${user.id}`)
            let lvl = db.fetch(`level_${message.guild.id}_${user.id}`)

            if (lvl === null) lvl = 0
            if (xp === null) xp = 0

            let curxp = xp;
            let curlvl = lvl;
            let nxtLvlXp = curlvl * 100;
            let difference2 = nxtLvlXp + 100 - curxp;

            const embed = new MessageEmbed()
                .setTitle(`**${user.displayName}**`)
                .setColor("00FFEC")
                .setDescription(`**Level - \`${curlvl}\` | XP - \`${curxp - 1}\`
                    Needed XP To Reach Next Level - \`${difference2 + 1}\`**
                    `)
                .setFooter(message.guild.name, message.guild.iconURL())
            message.channel.send(embed)

        } catch {
            message.channel.send(`**Oh No! An Error Occurred!**`);
        }
    }
};
