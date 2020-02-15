// JavaScript source code
const Discord = require('discord.js');
const client = new Discord.Client();

//league kayn api stuff
const { Kayn, REGIONS } = require('kayn');
const kayn = Kayn('RGAPI-e8d5db05-b6e6-4577-a0f1-26b44667fa1a')({
    region: REGIONS.NORTH_AMERICA,
    apiURLPrefix: 'https://%s.api.riotgames.com',
    locale: 'en_US',
    debugOptions: {
        isEnabled: true,
        showKey: false,

    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000,
        burst: false,
        shouldExitOn403: false,
    },
    cacheOptions: {
        cache: null,
        timeToLives: {
            useDefault: false,
            byGroup: {},
            byMethod: {},
        },
    },
})

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);

})

client.on('message', (receivedMessage) => {
//if(receivedMessage.author = client.user){
  //  return
//}
    if(receivedMessage.content.startsWith("!")) {
        let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
        let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
        var support = splitCommand[0] // The first word directly after the exclamation is the command
        var theSummoner = splitCommand[1] //the name of the summoner to be used
    }

if(support == "details" || support == "Details" ) {

    let tempSummoner =  theSummoner

    if (tempSummoner == "Fenris" || tempSummoner == "fenris") {
        kayn.Summoner.by.name("3MareepInACoat").callback(function (err, summoner) {
            receivedMessage.channel.send("Summoner name: " + summoner.name + "     Level: " + summoner.summonerLevel)
        });
    }
    else if (tempSummoner == "BlueTriforce" || tempSummoner == "bluetriforce"){
        kayn.Summoner.by.name("BlueTriforce").callback(function (err, summoner) {
            receivedMessage.channel.send("Summoner name: " + summoner.name + "     Level: " + summoner.summonerLevel)
        });
    }
    else if (tempSummoner == "W1Z4RD" || tempSummoner == "w1z4rd" || tempSummoner == "wizard"){
        kayn.Summoner.by.name("W1Z4RD").callback(function (err, summoner) {
            receivedMessage.channel.send("Summoner name: " + summoner.name + "     Level: " + summoner.summonerLevel)
        });
    }
    else if (tempSummoner == "Kogomoru" || tempSummoner == "kogomoru"){
        kayn.Summoner.by.name("Kogomoru").callback(function (err, summoner) {
            receivedMessage.channel.send("Summoner name: " + summoner.name + "     Level: " + summoner.summonerLevel)
        });
    }
    else if (tempSummoner == "yogurt" || tempSummoner == "Yogurt"){
        kayn.Summoner.by.name("Baby Toes").callback(function (err, summoner) {
            receivedMessage.channel.send("Summoner name: " + summoner.name + "     Level: " + summoner.summonerLevel)
        });
    }
    else if (tempSummoner == "ChungaWunga" || tempSummoner == "chungawunga"){
        kayn.Summoner.by.name("Piece Biscuit").callback(function (err, summoner) {
            receivedMessage.channel.send("Summoner name: " + summoner.name + "     Level: " + summoner.summonerLevel)
        });
    }
    else if (tempSummoner == "Gungfusi" || tempSummoner == "gungfusi"){
        kayn.Summoner.by.name("Gungfusi").callback(function (err, summoner) {
            receivedMessage.channel.send("Summoner name: " + summoner.name + "     Level: " + summoner.summonerLevel)
        });
    }
    else if (tempSummoner == "Botconman" || tempSummoner == "botconman"){
        kayn.Summoner.by.name("Botconman").callback(function (err, summoner) {
            receivedMessage.channel.send("Summoner name: " + summoner.name + "     Level: " + summoner.summonerLevel)
        });
    }
     //Only works on one word names no spaces
    else{
        kayn.Summoner.by.name(tempSummoner).callback(function (err, summoner) {
            receivedMessage.channel.send("Summoner name: " + summoner.name + "     Level: " + summoner.summonerLevel)
        });
    }
}
    if(support =="gamedetails" || support == "game"){
        let tempSummoner = theSummoner
       let kayn.Summoner.by.name(tempSummoner).callback(function (err, summoner) {

        });

        kayn.CurrentGame.by.summonerID(tempId).callback(function (err, match) {
            recievedMessage.channel.send(CurrentGame.participants )

        })

    }
});



// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "NDY1NzA4NjAyMzU1ODc1ODQw.XY0hTA.hkKN50n9DUMBrEFnVsYugkKAlgk"

client.login(bot_secret_token)