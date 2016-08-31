var Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("message", function(message)
{
    if(message.content === "Hi")
    (
        bot.reply(message, "Hey, There")
    )
});

bot.loginWithToken("MjIwNTc1ODQ0Njg5NTEwNDAw.CqiVnQ.kgzzVsnBI9EYgEP2LWwh5Z4edC0");
