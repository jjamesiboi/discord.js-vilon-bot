const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "support",
  usage: "Support <message>",
  description: "Send your support message",
  category: "main",
  run: (client, message, args) => {
    
   if(!args.length) {
      return message.channel.send("Please Give the Poll Message")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "poll-logs" || x.name === "polls"))
    
    
    if(!channel) {
      return message.channel.send("There is no channel with name - #polls or #poll-logs")
    } 
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("Poll By: " + message.author.tag)
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
    message.channel.send("Sent Your Poll to " + channel)
    
  }
}