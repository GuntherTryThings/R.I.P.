const mysqldump = require('mysqldump');

module.exports = async (message) => {
    if(message.arguments.includes('--get'))
        message.channel.send({ files: ['./backup/lastBackup.sql'] });
    else if(message.arguments.includes('--create')) {
        mysqldump({
            connection: {
                host: 'localhost',
                user: 'root',
                password: 'almafa',
                database: 'pannon-bot',
            },
            dumpToFile: `./backup/${new Date().getFullYear()}_`
            +`${`${new Date().getMonth()+1}`.padStart(2, '0')}_`
            +`${`${new Date().getDate()}`.padStart(2, '0')}_`
            +`${`${new Date().getHours()}`.padStart(2, '0')}'`
            +`${`${new Date().getMinutes()}`.padStart(2, '0')}_backup.sql`,
        });
        mysqldump({
            connection: {
                host: 'localhost',
                user: 'root',
                password: 'almafa',
                database: 'pannon-bot',
            },
            dumpToFile: `./backup/lastBackup.sql`,
        });
    } else
        return message.channel.send('**Incorrect usage:** use `--get` or `--create`');
};