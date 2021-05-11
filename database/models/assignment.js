const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

module.exports = sequelize.define('assignment', {
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    timeType: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    courseNeptun: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
