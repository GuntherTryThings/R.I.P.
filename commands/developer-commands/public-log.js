const { LOGCHANNEL } = require('../../config/ids.json');
const { version } = require('../../package.json');
const changelog = require('../../config/changelog.json');

module.exports = async (message) => {
    const channel = message.guild.channels.cache.get(LOGCHANNEL);
    if (!channel) return message.channel.send('Valami gebasz volt, nincs meg a channel.');
    const lastChanges = changelog[version];

    let fields = [];

    for(let name in lastChanges) {
        let value = '';
        for(let change in lastChanges[name])
            value += `${lastChanges[name][change]}\n`; 
        fields.push({ name, value });
    }

    console.log(fields);

    let embed = {
        title: `Verzió: ${version}`,
        color: 28077,
        fields
    };

    channel.send({ embed });
};