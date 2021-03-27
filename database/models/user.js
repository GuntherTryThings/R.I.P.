const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

module.exports = sequelize.define('user', {
    discordId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    neptun: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isDev: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        allowNull: false
    }
});
