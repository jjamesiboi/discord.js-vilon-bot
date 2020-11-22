module.exports = {
  name: "ping",
  category: "info",
  description: "Get bot ping :/",
  usage: "ping",
  run: (client, message) => {
   if(message.channel.type === "dm") return;
    message.channel.send(`**Pong** ${client.ws.ping}`);
  }
  
}