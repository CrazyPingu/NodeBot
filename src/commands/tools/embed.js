const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Return an embed'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('This is an EMBED!')
            .setDescription('This is a description')
            .setColor('#FF00FF')        //.setColor(client.color)
            .setImage(client.user.displayAvatarURL())       // will make the bot icon
            .setThumbnail(client.user.displayAvatarURL())   // will make the bot icon
            .setTimestamp(Date.now())
            .setAuthor({
                name: interaction.user.username,
                iconURL: interaction.user.displayAvatarURL(),
                url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            })
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag,
            })
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
        await interaction.reply({
            embeds: [embed]
        });
    }
};