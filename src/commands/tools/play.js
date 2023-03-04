const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Plays a song from YouTube')
        .addStringOption(option =>
            option.setName('song')
                .setDescription('The song you want to play')
                .setRequired(true)),
    async execute(interaction, client) {
        const voiceChannel = interaction.member.voice.channel;
        if (!voiceChannel) return interaction.reply('You need to be in a voice channel to play music!');

        try {
            await client.distube.play(voiceChannel, interaction.options.getString('song'), { quality: 'low' })
        } catch (err) {
            console.error(err);
        }

        const queue = client.distube.getQueue(interaction);
        const currentSong = queue.songs[0];
        const embed = new EmbedBuilder()
            .setTitle('Now Playing')
            .setDescription(`Song: [${currentSong.name}](${currentSong.url})
                            Artist: [${currentSong.uploader.name}](${currentSong.uploader.url})
                            Duration: \`${currentSong.formattedDuration}\`
                            Requested by: ${interaction.user}`)
            .setColor('#' + (Math.floor(Math.random() * 16777215).toString(16)));

        interaction.reply({ embeds: [embed] });
    },
};
