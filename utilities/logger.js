const { createLogger, format, transports } = require('winston');
const { combine, printf } = format;
const formatDate = require('./format-date');

const myFormat = printf(({ level, message }) => {
    return `${formatDate(new Date())} [${level}]: ${message}`;
});

exports.logger = createLogger({
    format: combine(myFormat),
    transports: [
        new transports.File({
            name: 'info-file',
            filename: './log/combined.log',
            level: 'info',
        }),
        new transports.File({
            name: 'error-file',
            filename: './log/error.log',
            level: 'error',
        }),
    ],
});
