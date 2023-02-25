const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `
            API Latency is ${Math.round(client.ws.ping)}ms\nClient ping is ${message.createdTimestamp - interaction.createdTimestamp}ms
        `;
        await interaction.editReply({
            content: newMessage
        });
    },
};