const User = require('../../database/models/user');
const Course = require('../../database/models/course');
const UserCourse = require('../../database/models/usercourse');

const days = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap'];

module.exports = async (message) => {
    if(message.arguments.includes('--today')) {
        const embed = await findOneDay(new Date().getDay() - 1, 'Mai órarended:', message.author.id, false, 14342166);
        message.channel.send({embed});
    } else {
        for(let i = 0; i < 7; i++) {
            const embed = await findOneDay(i, days[i], message.author.id, true, 39497);
            if(embed.fields.length)
                message.channel.send({embed});
        }
    }
};

async function findOneDay(dayIdx, title, authorId, inline, color) {
    const user = await User.findOne({ where: { discordId: authorId } });
    let fields = [];

    const userCourses = await UserCourse.findAll({
        where: {
            userId: user.id
        },
        include: [{ model: Course, where: { dayId: dayIdx } }],
        order: [
            [{ model: Course }, 'start', 'ASC']
        ]
    });

    for(let userCourse of userCourses) {
        const c = userCourse.course;
        fields.push({
            name: c.name,
            value: `Kezdet: ${c.start}, Hossz: ${c.duration} óra\n` +
            `Oktató: ${c.teacher}\nNeptun: (${c.neptun})`,
            inline
        });
    }

    let embed = {
        title,
        color,
        fields
    };

    return embed;
}