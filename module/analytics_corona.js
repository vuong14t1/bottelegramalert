const fetch = require('node-fetch');
var utility = require("./utility.js");  

async function getDataCorona(country, data) {
	var json = "sdf";
	try {
		const response = await fetch("https://pomber.github.io/covid19/timeseries.json");
		json = await response.json();
		data = json;
		//console.log(json[country]);
	} catch (error) {
		console.log(error);
	}
	//console.log(data);
}

function getStringCurrentDate(diff) {
	diff = diff === undefined? 0 : diff;
	var datetime = new Date();
	var string = "@years-@month-@day";
	return string.replace("@years", datetime.getFullYear())
				.replace("@month", datetime.getMonth() + 1)
				.replace("@day", datetime.getDate() - diff)
}

function analyticsCoronaVN (bot, message) {
	const response = fetch("https://pomber.github.io/covid19/timeseries.json")
	.then(res => res.json()).then(data => {
		var country = utility.getParameters(message.text)[0];
		country = country === undefined ? "Vietnam": country;
		var dataVN = data[country + ""];
		var existedData = false;
		var resultD = "";
		dataVN.forEach(element => {
		if(element["date"] == getStringCurrentDate(1)) {
			resultD = "Country " + country + "\n " + "Total: " + element["confirmed"] + " \n Deadths: " + element["deaths"] + "\n Recovered: " + element["recovered"];
			existedData = true;
		}
		});
		
		bot.sendMessage(message.chat.id, resultD);
		if(!existedData) {
		bot.sendMessage(message.chat.id, "Not Found Data");
		}
	
	})
}
exports.getDataCorona = getDataCorona;
exports.getStringCurrentDate = getStringCurrentDate;
exports.analyticsCoronaVN = analyticsCoronaVN;