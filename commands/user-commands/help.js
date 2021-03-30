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
                    value: '`$register NEPTUN Vezeteknev Keresztnev/nevek` - Regisztráció a bot adatbázisába\n'+
                        '`$calendar [csatolt file: neptunból kiexportált .ics]` - Órarend feltöltése a bot adatbázisába, és kapcsolatok létrehozása'
                },
                {
                    name: 'Infó',
                    value:
                        '`$help` - Ez az embed\n'
                },
            ],
        },
    };
}
