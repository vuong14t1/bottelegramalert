function sendMsg(bot, id, msg) {
    bot.sendMessage(id, msg);
}

function sendMsgWithMarkup(bot, id, msg, markup) {
    if(!(markup instanceof Array)) {
        markup = [markup];
    }
    bot.sendMessage(id, msg, {
        "reply_markup": {
            "keyboard": markup
            }
        });
}

exports.sendMsg = sendMsg;
exports.sendMsgWithMarkup= sendMsgWithMarkup;