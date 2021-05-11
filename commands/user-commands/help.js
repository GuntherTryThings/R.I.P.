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
                    value: '`$register NEPTUN Vezetéknev Keresztnév/nevek` - Regisztráció a bot adatbázisába\n'+
                        '`$calendar [csatolt file: neptunból kiexportált .ics]` - Órarend feltöltése a bot adatbázisába, és kapcsolatok létrehozása'
                },
                {
                    name: 'Lekérdezések',
                    value: '`$timetable` - Órarend lekérdezése egy hétre\n'+
                        '`$timetable --today` - Órarend lekérdezése a mai napra\n'+
                        '`$mycourses` - Minden kurzusod lekérdezése (kurzus neve, kurzus neptunja)\n'+
                        '`$myevents` - Minden ZH-d és határidőd lekérdezése'
                },
                {
                    name: 'Események:',
                    value: '`$deadline TÁRGYNEPTUN, yyyy-mm-dd, hh:mm, Leírás` - Határidő felvitele egy adott tárgyhoz\n'+
                        '`$zh TÁRGYNEPTUN, yyyy-mm-dd, hh:mm, Leírás` - ZH időpont felvitele egy adott tárgyhoz'
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
