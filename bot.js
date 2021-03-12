const { TOKEN } = require('./config/token.json');

const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['USER', 'GUILD_MEMBER', 'CHANNEL', 'MESSAGE', 'REACTION'] });

client.once('ready', async () => {
    console.log('Bot is ready');
});

client.login(TOKEN);
