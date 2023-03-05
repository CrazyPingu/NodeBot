const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

module.exports = (client) => {
	const commands = [];
	// Grab all the command files from the commands directory you created earlier
	const commandsPath = path.join(__dirname, '../../commands/tools/');
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`../../commands/tools/${file}`);
		commands.push(command.data.toJSON());
	}

	const rest = new REST({ version: '10' }).setToken(client.token);

	(async () => {
		try {
			const data = await rest.put(
				Routes.applicationCommands(client.clientId),
				{ body: commands },
			);

			console.log(`Successfully reloaded ${data.length} application (/) commands.`);
		} catch (error) {
			console.error(error);
		}
	})();
}
