const Discord = require('discord.js');
const moment = require("moment");
const client = new Discord.Client();
require("moment-duration-format");

module.exports = {
  name: "uptime",
  usage: "",
  description: "Shows Uptime Of Bot",
  category: "info",
  run: (client, message, args) => {
   


          const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

          const statEmbed = new Discord.MessageEmbed()
          .setTitle("**  = STATISTICS =**")
          .addField("**Mem Usage  ::**", `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB**`)
          .addField("**Uptime**", `**${duration}**`);

          channel.send(statEmbed)
        }
}