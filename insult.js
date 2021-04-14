// Appels de fichiers //
const Discord = require("discord.js")
const Insult = require("./insult.json")
// Variables //
ListeInsulte = Insult["insult"]

module.exports.InsultScroll = function (msg,message){

    mot = msg.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()

    Mot = ""
    i = 0
    while (i < mot.length){
        if (mot[i] != mot[i+1]) {
            Mot = Mot + mot[i]
        }
        i = i+1
    }
    
    i = 0
    while (i < ListeInsulte.length){
        if(Mot.includes(ListeInsulte[i])){
            message.delete()
            message.reply("Ce genre de grossièretés ne sont pas admises sur S&Box !")
        }
        i = i+1
    }
}