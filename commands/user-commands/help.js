module.exports = async (message) => {
        message.channel.send(generateHelp());
};

function generateHelp() {
    return {
        embed: {
            title: 'Parancsok listája',
            color: 12604671,
            fields: [
                {
                    name: 'Adminisztráció',
                    value: '~~`$register [neptun] [name]` - Regisztráció a bot adatbázisába~~'
                },
                {
                    name: 'Infó',
                    value:
                        '`$help` - Ez az embed\n' +
                        '~~`$info` - Információk a botról~~',
                },
            ],
        },
    };
}
