//discord requirements
const Discord = require('discord.js');
const client = new Discord.Client();

//cheerio and axios for web scraping
const axios = require('axios');
const cheerio = require('cheerio');

//requirements to parse json files
var fs = require("fs");
var content = fs.readFileSync("tokens.json")
var tokens = JSON.parse(content)
var messageData;
const url = 'https://na.leagueoflegends.com/en-us/news/game-updates/';
var schedule = require('node-schedule')






//league kayn api stuff
const { Kayn, REGIONS } = require('kayn');
const kayn = Kayn(tokens.leagueToken)({
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

//confirms the bot is connected to discord prints message to a console with bot name
client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
var j = schedule.scheduleJob({hour:21, minute: 10}, function(){

    axios.get(url).then(response => {
        let getData = html => {
            const $ = cheerio.load(html);
            messageData = "https://na.leagueoflegends.com" + $('a.style__Wrapper-i44rc3-0.style__ResponsiveWrapper-i44rc3-13.gkCnQM.isVisible').attr('href')
        }

        getData(response.data)
    });
})
})

client.on('message', (receivedMessage) => {
       //splits message into command and person
    if(receivedMessage.content.startsWith("!")) {
        var fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
        var splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
        var support = splitCommand[0] // The first word directly after the exclamation is the command
        var theSummoner = splitCommand[1] //the name of the summoner to be used
    }

if(support == "details" || support == "Details" ) {

    kayn.Summoner.by.name(theSummoner).callback(function (err, summoner) {
        receivedMessage.channel.send("Summoner name: " + summoner.name + "     Level: " + summoner.summonerLevel)
    });
}
if(support =="gamedetails" || support == "game"){
    let gameInfo;
       kayn.Summoner.by.name(theSummoner).callback(function (err, summoner) {
           kayn.CurrentGame.by.summonerID(summoner.id).callback(function (err, match) {

           })
        });
    }
});



client.login(tokens.discordToken)