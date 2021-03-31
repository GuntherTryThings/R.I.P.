module.exports = async (message) => {
        message.channel.send(generateHelp());
};

function generateHelp() {
    return {
        embed: {
            title: 'Parancsok listája',
            color: 9896082,
            fields: [
                {
                    name: 'Adminisztráció',
                    value: '`$register NEPTUN Vezeteknev Keresztnev/nevek` - Regisztráció a bot adatbázisába\n'+
                        '`$calendar [csatolt file: neptunból kiexportált .ics]` - Órarend feltöltése a bot adatbázisába, és kapcsolatok létrehozása'
                },
                {
                    name: 'Lekérdezések',
                    value: '`$timetable` - Órarend lekérdezése egy hétre\n'+
                        '`$timetable --today` - Órarend lekérdezése a mai napra'
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
