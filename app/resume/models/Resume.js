const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db') //Импортируйте настройки подключения к базе данных
const City = require('../../region/City')
const User = require('../../auth/User')
// const Country = require('../../region/Country')

const Resume = sequelize.define('Resume', {
  post: {
    type: DataTypes.STRING,
    allowNull: false,
  },  
  story: {
    type: DataTypes.STRING,
    allowNull: false,
  },    
  about: {
    type: DataTypes.STRING,
    allowNull: false,
  },   
  participants: {
    type: DataTypes.STRING,
    allowNull: false,
  }        
});

Resume.belongsTo(City, { foreignKey: 'cityId' }); // Определяем внешний ключ 'roleId'
Resume.belongsTo(User, { foreignKey: 'userId' }); // Определяем внешний ключ 'roleId'
// Resume.belongsTo(Country, { foreignKey: 'citizenship' }); // Определяем внешний ключ 'roleId'

module.exports = Resume;
