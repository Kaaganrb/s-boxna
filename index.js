// Appels de fichiers //
const Discord = require("discord.js")
const Insult = require("./insult.json")
const Token = require("./token.json")
const Insulte = require("./insult.js")
// Connexions discord //
const client = new Discord.Client()
client.login(Token.token)
// Variables //
ins = Insult["insult"]


// Détection des messages //
client.on("message", function (message) {
    msg = message.content
    if (message.author.bot == false) {
        Insulte.InsultScroll(msg,message)
        if(message.member.roles.cache.has("830492864756449297")) {
            console.log(`Oui l'auteur du message à ce rôle !`);
        } 
        else {
            console.log(`Bah non enfait.. il à pas ce rôle.`);
        }
    }
}) 