const { PREFIX, DEVELOPER_PREFIX } = require('../config/config.json');
const User = require('../database/models/user');
const { logger } = require('../utilities/logger');

module.exports = async (userMessage, client) => {
    if (!userMessage.author.bot) {
        if (userMessage.content.startsWith(DEVELOPER_PREFIX)) {
            const user = await User.findOne({ where: { discordId: userMessage.author.id, isDev: 1 } });
            if(user)
                await tryToExecuteCommand(userMessage, DEVELOPER_PREFIX, 'developer-commands', client);
            else return userMessage.channel.send('Sajnos nincs jogosultságod ehhez a parancshoz.');
        } else if (userMessage.content.startsWith(PREFIX)) await tryToExecuteCommand(userMessage, PREFIX, 'user-commands');
    }
};

function formatUserMessage(userMessage, prefix, client) {
    let messageArguments = userMessage.content.slice(prefix.length).trim().split(' ');
    let command = messageArguments.shift();
    return {
        arguments: messageArguments,
        command,
        channel: userMessage.channel,
        author: userMessage.author,
        member: userMessage.member,
        mentions: userMessage.mentions,
        attachments: userMessage.attachments,
        client,
    };
}

async function tryToExecuteCommand(userMessage, prefix, lastFolderInPath, client = null) {
    const message = formatUserMessage(userMessage, prefix, client);
    try {
        await executeCommand(message, lastFolderInPath);
    } catch (error) {
        handleCommandError(message, error);
    }
}

async function executeCommand(message, lastFolderInPath) {
    const command = require(`../commands/${lastFolderInPath}/${message.command}`);
    await command(message);
}

function handleCommandError(message, error) {
    logger.log('error', error.message);
}
