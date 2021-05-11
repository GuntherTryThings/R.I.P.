const Assignment = require('../../database/models/assignment');
const Course = require('../../database/models/course');

module.exports = async (message) => {
    data = await formatData(message.arguments);

    if(data.courseNeptun == null)
        return message.channel.send('A tárgy neptun kódja helytelen!');
    if(!/^[0-9]{4,4}\-[0-9]{2,2}\-[0-9]{2,2}$/g.test(data.date) || !data.date)
        return message.channel.send('Helytelen dátum! A helyes formátum: `yyyy-mm-dd`');
    if(!/^[0-9]{2,2}\:[0-9]{2,2}$/g.test(data.time) || !data.time)
        return message.channel.send('Helytelen idő! A helyes formátum: `hh:mm`');
    if(!data.description)
        return message.channel.send('A leírás nem lehet üres!');

    await Assignment.create({
        ...data,
        timeType: 0
    });

    return message.channel.send('Határidő sikeresen rögzítve.');
};

async function formatData(arguments) {
    let data = '';
    for(let argument of arguments) data += `${argument} `;
    data = data.split(/,|;/g);

    const course = await Course.findOne({where: { neptun: data[0].trim() }})

    returnData = {
        courseNeptun: course ? course.neptun : null,
        date: data[1].trim(),
        time: data[2].trim(),
        description: data[3].trim()
    }

    return returnData;
}