const { MessageEmbed } = require("discord.js"); 
module.exports = {
    name: 'malo',
    description: 'this is malo command',
    execute(client, message,args, Discord){
        
        const newEmbed = new MessageEmbed()
        .setColor('#BACAFF')
        .setDescription('he made me lol');

        client.channel.send(newEmbed);
        
    }
}