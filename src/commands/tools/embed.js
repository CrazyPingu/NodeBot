const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Return an embed'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('This is an EMBED!')
            .setDescription('This is a description')
            .setColor(0x18e1ee)        //.setColor(client.color)
            .setImage(client.user.displayAvatarURL())       // will make the bot icon
            .setThumbnail(client.user.displayAvatarURL())   // will make the bot icon
            .setTimestamp(Date.now())
            .setAuthor({
                name: interaction.user.username,
                iconURL: interaction.user.displayAvatarURL(),
                // url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            })
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag,
            })
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .addField([
                {
                    name: 'Field 1',
                    value: 'Field 1 value',
                    inline: true
                },
                {
                    name: 'Field 2',
                    value: 'Field 2 value',
                    inline: true
                }
            ]);
        await interaction.reply({
            embeds: embed
        });
        
    }
};