var Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("message", function(message)
{
    if(message.content === "Hi")
    (
        bot.reply(message, "Hey, There")
    )
});

bot.loginWithToken("");
