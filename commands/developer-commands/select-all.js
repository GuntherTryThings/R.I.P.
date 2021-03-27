const User = require("../../database/models/user");

module.exports = async (message) => {
    if(message.arguments.includes('--user')) {
        const users = await User.findAll({
            order: [["neptun", "ASC"]],
        });

        let devStr = '';
        let str = '';

        for(let user of users) {
            if(user.isDev)
                devStr += `${user.neptun} - ${user.name}\n`;
            else
                str += `${user.neptun} - ${user.name}\n`;
        }

        if(str.length == 0)
            str = "Nincsenek felhasználók az adatbázisban.";
        if(devStr.length == 0)
            str = "Nincsenek fejlesztők az adatbázisban.";

        let embed = {
            title: 'Felhasználók listája',
            color: 5174811,
            fields: [
                {
                    name: 'Fejlesztők',
                    value: devStr
                },
                {
                    name: 'Felhasználók',
                    value: str
                },
            ],
        };

        message.channel.send({embed});
    }
};