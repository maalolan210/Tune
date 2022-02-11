const Discord = require('discord.js');
require('dotenv').config();
const client  = new Discord.Client();

const fs = require('fs'); //file system module to let us read or write js files

client.commands = new Discord.Collection(); //creates a collection to store all commands
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.DISCORD_TOKEN);


{ intents: ["GUILDS", "GUILD_MESSAGES"] }