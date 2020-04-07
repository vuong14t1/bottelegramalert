var schedule = require("node-schedule");
var listIdGroup = [];
var index = require("./../index.js");

//schedule testing
var rule = new schedule.RecurrenceRule();
rule.tz = "Asia/Ho_Chi_Minh";
rule.hour = 20;
rule.minute = 0;
rule.second = 0;
schedule.scheduleJob(rule, function(){
    broadcaseMessage("20h rồi!Học hay chơi đây!");
});

//schedule testing
var rule = new schedule.RecurrenceRule();
rule.tz = "Asia/Ho_Chi_Minh";
rule.hour = 22;
rule.minute = 0;
rule.second = 0;
schedule.scheduleJob(rule, function(){
    broadcaseMessage("22h rồi!Học tiếp hay chơi đây!");
});


//schedule 1
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.tz = "Asia/Ho_Chi_Minh";
rule.hour = 8;
rule.minute = 14;
rule.second = 0;
schedule.scheduleJob(rule, function(){
    broadcaseMessage("Điểm danh buổi sáng!");
});

//schedule 1
var rule = new schedule.RecurrenceRule();
rule.tz = "Asia/Ho_Chi_Minh";
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.hour = 8;
rule.minute = 15;
rule.second = 0;
schedule.scheduleJob(rule, function(){
    broadcaseMessage("Điểm danh buổi sáng!");
    startSchedule2Loop();
});

//schedule 2
function startSchedule2Loop() {v
    var duration = 3600;
    setTimeout(function () {
        broadcaseMessage("Vận động 5 phút đi ông chủ ơi!");
        var date = new Date();
        if(date.getHours() + 1 <= 17) {
            startSchedule2Loop();
        }
    }, duration);
}

//schedule 3
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.tz = "Asia/Ho_Chi_Minh";
rule.hour = 11;
rule.minute = 59;
rule.second = 0;
schedule.scheduleJob(rule, function(){
    broadcaseMessage("Đi ăn cơm ông chủ ơi");
});

//schedule 4
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.tz = "Asia/Ho_Chi_Minh";
rule.hour = 12;
rule.minute = 59;
rule.second = 0;
schedule.scheduleJob(rule, function(){
    broadcaseMessage("Điểm danh buổi chiều");
});

//schedule 5
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.tz = "Asia/Ho_Chi_Minh";
rule.hour = 17;
rule.minute = 0;
rule.second = 0;
schedule.scheduleJob(rule, function(){
    broadcaseMessage("Đi tập thể dục ông chủ ơi!");
});

//schedule 6
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];

rule.hour = 18;
rule.minute = 0;
rule.second = 0;
schedule.scheduleJob(rule, function(){
    broadcaseMessage("Giờ tập thể dục kết thúc!");
});

function broadcaseMessage(msg) {
    for(var i in listIdGroup) {
        index.bot.sendMessage(listIdGroup[i], msg);
    }
}




function registerAlert(idGroup) {
    if(listIdGroup.indexOf(idGroup) <= -1) {
        listIdGroup.push(idGroup);
        index.bot.sendMessage(idGroup, "Register alert success!");
        console.log("registerAlert success!");
    }else {
        console.log("registerAlert again");
        index.bot.sendMessage(idGroup, "You have registered!");
    }
}

function unRegisterAlert() {
    var idx = listIdGroup.indexOf(idGroup);
    if(idx > -1) {
        listIdGroup.splice(idx, 1);
        index.bot.sendMessage(idGroup, "Destroy register alert success!");
    }
}

exports.registerAlert = registerAlert;
exports.unRegisterAlert = unRegisterAlert;