const https = require('https');
const fs = require('fs');
const CourseClass = require('../../classes/course');
const Course = require('../../database/models/course');
const UserCourse = require('../../database/models/usercourse');
const User = require('../../database/models/user');


module.exports = async (message) => {
    const user = await User.findOne({ where: { discordId: message.author.id }});
    if(user)
        await executeICSImport(user, message);
    else
        message.channel.send('Ehhez a funkcióhoz regisztrálnod kell!');
};

function createObjects(data) {
    let rows = data.split('\n'), events = [];

    for(let i = 0; i < rows.length; i++) {
        if(rows[i].includes('BEGIN:VEVENT')) {
            let usefulRows = [];
            for(let j = 0; j < 12; j++)
                usefulRows.push(rows[i+j]);
            i += 12;
            events.push(usefulRows);
        }
    }

    let summaryDatas = [], dates = [];

    for(let event of events) {
        for(let element of event) {
            if(element.includes('SUMMARY:'))
                summaryDatas.push(element);
            if(element.includes('DTSTART:') || element.includes('DTEND:'))
                dates.push(element);
        }
    }

    let courses = [], step = 0;
    for(let summaryData of summaryDatas) {
        courses.push(new CourseClass(summaryData, dates[step], dates[step+1]));
        step += 2;
    }

    return courses;
}

async function executeICSImport(user, message) {
    const date = new Date();
    const fileName = date.getMilliseconds() + date.getSeconds()*60 + date.getMinutes()*600;
    const targetFile = fs.createWriteStream(`./downloads/${fileName}.ics`);

    https.get(message.attachments.array()[0].attachment, (response) => {
        response.pipe(targetFile);
        targetFile.on('finish', () => {
            fs.readFile(`./downloads/${fileName}.ics`, async (err,data) => {
                if (err) throw err;
                let fileContent = data.toString('utf-8');
                const courseObjects = createObjects(fileContent);

                for(let course of courseObjects) {
                    const existingCourse = await Course.findOne({
                        where: {
                            name: course.name,
                            neptun: course.neptun,
                            teacher: course.teacher,
                            dayId: course.dayIdx,
                            start: course.startTime,
                            duration: course.duration
                        }
                    });

                    if(existingCourse)
                        await courseExist(user, existingCourse);
                    else
                        await newCourse(user, course);
                }
                fs.unlink(`./downloads/${fileName}.ics`, (error) => { if(error) throw error; });
                message.channel.send('Sikeres bevitel!');
            });
        });
    });
}

async function courseExist(user, course) {
    const userCourse = await UserCourse.findOne({
        where: {
            userId: user.id,
            courseId: course.id
        }
    });

    if(!userCourse)
        await UserCourse.create({
            userId: user.id,
            courseId: course.id
        });
}

async function newCourse(user, course) {
    const createdCourse = await Course.create({
        name: course.name,
        neptun: course.neptun,
        teacher: course.teacher,
        dayId: course.dayIdx,
        start: course.startTime,
        duration: course.duration
    });

    await UserCourse.create({
        userId: user.id,
        courseId: createdCourse.id
    });
}