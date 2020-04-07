process.env.NTBA_FIX_319 = 1;
require('dotenv').config();
const fetch = require('node-fetch');  

const TelegramBot = require('node-telegram-bot-api');
//mode 1: live
var token = process.env.TOKEN_LIVE;
if(process.env.MODE_BUILD != 1) {
  token = process.env.TOKEN_DEV;
}
var corona = require("./module/analytics_corona.js");
var utility = require("./module/utility.js");
var schedule_job = require("./module/schedule_job.js");
var broadcast_utility = require("./module/broadcast_utility.js");
var http = require('http');
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Bot telegram by PQV');
}).listen(process.env.PORT || 3000);
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
      broadcast_utility.sendMsg(bot, message.chat.id, "Hi boss.");
    break;
    case "/schedule_job":
      schedule_job.registerAlert(message.chat.id);
    break;
    case "/unschedule_job":
      schedule_job.unRegisterAlert(message.chat.id);
    break;
    case "/help":
      broadcast_utility.sendMsgWithMarkup(bot, message.chat.id, "Hi boss.", [["/corona"], ["/schedule_job"], ["/unschedule_job"]]);
    break;
  }
  
});

// mongo_controller.MongoController().set();


bot.on("polling_error", (err) => console.log(err));


exports.bot = bot;