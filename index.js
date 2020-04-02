require('dotenv').config();
const fetch = require('node-fetch');  

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;
var corona = require("./module/analytics_corona.js");
var utility = require("./module/utility.js");
// Created instance of TelegramBot
const bot = new TelegramBot(token, {
   polling: true
});

bot.on("text", (message) => {
  switch(utility.getCmd(message.text)) {
    case "/corona":
      corona.analyticsCoronaVN(bot, message);
    break;
  }
  
});



bot.on("polling_error", (err) => console.log(err));
