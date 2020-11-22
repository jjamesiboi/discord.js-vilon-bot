const db = require("quick.db")

module.exports = {
  name: "delcmd",
  usage: "delcmd <cmd_name>",
  description: "Delete the custom commannd",
  category: "fun",
  run: (client, message, args) => {
   if(message.author.bot) return;
    if(message.channel.type === "dm")
    return message.channel.send("No dm commands...")

    let cmdname = args[0]

    if(!cmdname) return message.channel.send(":x: Gimm me commmand name, `delcmd <cmd_name>`")

    let database = db.get(`cmd_${message.guild.id}`)

    if(database) {
      let data = database.find(x => x.name === cmdname.toLowerCase())

      if(!data) return message.channel.send(":x: Unable to find this command.")

      let value = database.indexOf(data)
      delete database[value]

      var filter = database.filter(x => {
        return x != null && x != ''
      })

      db.set(`cmd_${message.guild.id}`, filter)
      return message.channel.send(`Deleted the **${cmdname}** Command!`)


    } else {
      return message.channel.send(":x: Sorry but i am unable to find that command!")
    


  }
  }
}
 