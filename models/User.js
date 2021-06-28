const { Sequelize, DataType, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

const User = sequelize.define('User', 
{
    firstName: {
        type: DataTypes.STRING,
        allowNull = false
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull = false
    },
    define: {
    freezeTableName: true
    }
})