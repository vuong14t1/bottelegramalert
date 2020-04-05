process.env.NTBA_FIX_319 = 1;
require('dotenv').config();
const fetch = require('node-fetch');  

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;
var corona = require("./module/analytics_corona.js");
var utility = require("./module/utility.js");
var schedule_job = require("./module/schedule_job.js");
// Created instance of TelegramBot
const bot = new TelegramBot(token, {
   polling: true
});

bot.on("text", (message) => {
  switch(utility.getCmd(message.text)) {
    case "/corona":
      corona.analyticsCoronaVN(bot, message);
    break;
    case "/hi":
      bot.sendMessage(message.chat.id, "Hello Ông chủ đẹp trai!");
    break;
    case "/schedule_job":
      schedule_job.registerAlert(message.chat.id);
    break;
  }
  
});

// mongo_controller.MongoController().set();


bot.on("polling_error", (err) => console.log(err));


exports.bot = bot;