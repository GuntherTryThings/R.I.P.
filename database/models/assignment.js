const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

module.exports = sequelize.define('assignment', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    timeType: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});
