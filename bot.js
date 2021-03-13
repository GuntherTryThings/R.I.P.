const { TOKEN } = require('./config/token.json');

const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['USER', 'GUILD_MEMBER', 'CHANNEL', 'MESSAGE', 'REACTION'] });

const userMessageHandler = require('./handlers/message-handler');
const { logger } = require('./utilities/logger');

client.once('ready', async () => {
    logger.info(`Bot started`);
});

client.on('message', async (userMessage) => {
    try {
        userMessageHandler(userMessage);
    } catch (err) {
        logger.error(err);
    }
});

client.login(TOKEN);