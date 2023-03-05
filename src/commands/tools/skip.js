const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('skip')
        .setDescription('Skips the current song'),
    async execute(interaction, client) {
        try {
            const queue = client.distube.getQueue(interaction);
            if (!queue) return interaction.reply('There is no song playing right now!');
            if (queue.autoplay || queue.songs.length > 1) {
                client.distube.skip(interaction)
            }else{
                client.distube.stop(interaction)
            }
            const embed = new EmbedBuilder()
                .setTitle('Skipped')
                .setDescription(`Skipped ` + queue.songs[0].name
                    + ` \`BY\` ` + queue.songs[0].uploader.name)
                .setColor('#' + (Math.floor(Math.random() * 16777215).toString(16)));

            interaction.reply({ embeds: [embed] });
        } catch (error) {
            interaction.reply('There was an error trying to skip the song: ' + error);
        }
    }
}
