const User = require('../../database/models/user');
const Course = require('../../database/models/course');
const UserCourse = require('../../database/models/usercourse');

module.exports = async (message) => {
    let courses = [], formattedCourses = [];
    const user = await User.findOne({ where: { discordId: message.author.id }, include: { model: UserCourse, include: { model: Course } }});
    for(let userCourse of user.usercourses)
        courses.push({neptun: userCourse.course.neptun, name: userCourse.course.name});

    for(let course of courses)
        if(!JSON.stringify(formattedCourses).includes(course.name))
            formattedCourses.push(course);

    formattedCourses.sort((firstEl, secondEl) => {
        const nameFirst = firstEl.name.toUpperCase();
        const nameSec = secondEl.name.toUpperCase();
        return nameFirst < nameSec ? -1 : 1;
    })

    const embed = createEmbed(formattedCourses, user.neptun);
    return message.channel.send({embed});
};

function createEmbed(userCourses, neptun) {
    let fields = [];
    for(let course of userCourses) {
        fields.push({
            name: course.name,
            value: course.neptun
        });
    }

    let embed = {
        title: `${neptun} kurzusai:`,
        color: 16746042,
        fields
    };

    return embed;
}