const User = require('../../database/models/user');
const Course = require('../../database/models/course');
const UserCourse = require('../../database/models/usercourse');
const Assignment = require('../../database/models/assignment');
const Op = require('sequelize').Op;

module.exports = async (message) => {
    let courses = [], allAssignments = [];
    const user = await User.findOne({ where: { discordId: message.author.id }, include: { model: UserCourse, include: { model: Course } }});
    for(let userCourse of user.usercourses)
        courses.push(userCourse.course.neptun);

    let assignments = await Assignment.findAll({
        where: {
            courseNeptun: {[Op.or]: courses},
            date: {[Op.gt]: new Date(new Date().setDate(new Date().getDate()-1))}
        }
    });

    for(let assignment of assignments) {
        const course = await Course.findOne({where: {neptun: assignment.courseNeptun}});
        allAssignments.push({
            course: course.name,
            courseNeptun: course.neptun,
            time: assignment.time,
            date: assignment.date,
            type: assignment.timeType,
            description: assignment.description
        });
    };

    allAssignments.sort((first, second) => {
        let firstDate = new Date(`${first.date} ${first.time}`);
        let secondDate = new Date(`${second.date} ${second.time}`);
        return firstDate < secondDate ? -1 : 1;
    });

    const embed = createEmbed(allAssignments, user.neptun);
    return message.channel.send({embed});
};

function createEmbed(assignments, neptun) {
    let fields = [];
    for(let a of assignments) {
        fields.push({
            name: `${a.course} - ${a.courseNeptun} - ${a.type ? 'ZH' : 'Határidő'}`,
            value: `${a.date} ${a.time} - ${a.description}`
        });
    }

    let embed = {
        title: `${neptun} eseményei:`,
        color: 1674642,
        fields
    };

    return embed;
}