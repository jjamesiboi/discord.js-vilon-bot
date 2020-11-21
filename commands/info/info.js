const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');

module.exports = {
  name: "info",
  usage: "",
  description: "Shows info Of Bot",
  category: "info",
  run: (client, message, args) => {


  

          const infoEmbed = new Discord.MessageEmbed()
          .setTitle("**  = INFORMATION =**")
          .addField("**Website  :**", "**https://jamesmesser.xyz**")
          .addField("**Creator**", "**Epicer#0001**");
       
          message.channel.send(infoEmbed)
  }
}