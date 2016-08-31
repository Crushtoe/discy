var Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("message", function(message))
{
    if(message.content === "Hi")
    (
        bot.reply(message, "Hey, There");
    )
});

bot.loginWithToken("MjlwNTc1ODQ0Njg5NTEwNDAw.CqiS8w.2xMJ5hTS2McRP4w7CyWmedHpETU");
