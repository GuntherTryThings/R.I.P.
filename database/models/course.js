const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

module.exports = sequelize.define('course', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    neptun: {
        type: DataTypes.STRING,
        allowNull: false
    },
    teacher: {
        type: DataTypes.STRING
    },
    dayId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    start: {
        type: DataTypes.TIME,
        allowNull: false
    },
    duration: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});
