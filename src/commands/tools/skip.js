const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { default: dist, DisTubeError } = require('distube');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('skip')
        .setDescription('Skips the current song'),
    async execute(interaction, client) {
        try {
            const queue = client.distube.getQueue(interaction);
            if (!queue) return interaction.reply('There is no song playing right now!');
            client.distube.skip(interaction);
            console.log('Skipped the current song');
            const embed = new EmbedBuilder()
                .setTitle('Skipped')
                .setDescription(`Skipped the current song`)
                .setColor('#' + (Math.floor(Math.random() * 16777215).toString(16)));

            interaction.reply({ embeds: [embed] });
        } catch (error) {
            interaction.reply('There was an error trying to skip the song: ' + error);
        }
    }
}
