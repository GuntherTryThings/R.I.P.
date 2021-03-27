const User = require('../../database/models/user');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = async (message) => {
    if(message.arguments && message.arguments.length >= 3) {
        const neptun = message.arguments[0];
        let name = '';
        for(let i = 1; i < message.arguments.length; i++) {
            name += message.arguments[i];
            if(i < message.arguments.length - 1) {
                name += ' ';
            }
        }

        const user = await User.findOne({
            where: {
                [Op.or]: [
                    {discordId: message.author.id},
                    {neptun}
                ]
            }
        });

        if(!user) {
            await User.create({
                discordId: message.author.id,
                name,
                neptun
            });
            message.channel.send('Sikeres regisztráció!');
        } else
            message.channel.send('Már korábban regisztráltál!');
    }
    else
        console.log("Hibás bevitel");
};
