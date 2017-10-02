const commando = require('discord.js-commando');
const bot = new commando.Client();
bot.commandPrefix = "~";

console.log("Online");

bot.registry.registerDefaults();

bot.on('ready', () => {bot.user.setPresence({status: 'online', game: { name: "test69", type: 0}})});


bot.on("message", message => {
	if (message.content == "aaa")
	{
		message.channel.send("bbb");
	}
});





bot.login('MzY0NDQ3Mzg1NzcxOTY2NDY1.DLP5pg.P9wToylWSkFLlmcbnQ5mjHRbbOU');