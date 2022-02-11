const { MessageEmbed } = require("discord.js"); 
module.exports = {
    name: 'angi',
    description: 'this is angi command',
    execute(client, message, args, Discord){
        
        const newEmbed = new MessageEmbed()
        .setColor('#BACAFF')
        .setDescription('malo loves angi so much fr.');

        client.channel.send(newEmbed);
    }
}