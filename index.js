// Appels de fichiers //
const Discord = require("discord.js")
const Insult = require("./insult.json")
// Connexions discord //
const client = new Discord.Client()
client.login(process.env.TOKEN)
var port = process.env.PORT || 8080;
var server=app.listen(port,function() {
console.log("app running on port 8080"); });
// Variables //
ins = Insult["insult"]

// Détection des messages //
client.on("message", function (message) {
    msg = message.content

    ListeDeMot = msg.split(" ")
    ListeDeMot = msg.split(",")
    if(InsultScroll(ins,ListeDeMot) == true){
        message.delete()
    }
})

function InsultScroll(ListeInsulte,ListeMot){
    i = 0
    while (i < ListeMot.length){
        a = 0
        while (a < ListeInsulte.length){
            if(ListeMot[i] == ListeInsulte[a]){
                return true
            }
            a = a+1
        }
        i = i+1
    }
    return false
}
