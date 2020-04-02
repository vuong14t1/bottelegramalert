require('dotenv').config();
const fetch = require('node-fetch');  

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;
var corona = require("./module/analytics_corona.js");

// Created instance of TelegramBot
const bot = new TelegramBot(token, {
   polling: true
});

bot.on("text", (message) => {
  switch(getCmd(message.text)) {
    case "/coronaVN":
      corona.analyticsCoronaVN(bot, message);
    break;
  }
  
});

function getCmd(text) {
  return text.split(" ")[0];
}

bot.on("polling_error", (err) => console.log(err));