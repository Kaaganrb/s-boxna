// Appels de fichiers //
const Discord = require("discord.js")
const Insult = require("./insult.json")
const Insulte = require("./insult.js")
const MembersId = require("./membersid.js")
// Connexions discord //
const client = new Discord.Client()
client.login(process.env.TOKEN)
// Variables //
ins = Insult["insult"]


// Détection des messages //
client.on("message", function (message) {
    msg = message.content
    if (message.author.bot == false) {
        console.log(MembersId.MembersId(message))
        if(MembersId.MembersId(message)) {
            message.reply("Ouais mon gars", {tts:true})
        }
        else {
            Insulte.InsultScroll(msg,message)
        }
    }
}) 
