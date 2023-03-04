const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { token, clientId } = require('../config.json');
const { DisTube } = require('distube');
const fs = require('fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ]
});

client.commands = new Collection();
client.commandArray = [];
client.token = token;
client.clientId = clientId;
client.distube = new DisTube(client, {
    searchSongs: 0,
    emitNewSongOnly: true,
    leaveOnEmpty: true,
    leaveOnFinish: true,
    nsfw: true,
    leaveOnStop: false,
});

const functionFolder = fs.readdirSync('./src/functions');

for (const folder of functionFolder) {
    const functionFiles = fs
        .readdirSync(`./src/functions/${folder}`)
        .filter(file => file.endsWith('.js'));
    for(const file of functionFiles) {
        require(`./functions/${folder}/${file}`)(client);
    }
}

client.handleEvents();
client.handleCommands();
client.login(token);