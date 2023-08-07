const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db') //Импортируйте настройки подключения к базе данных
const Resume = require('../resume/models/Resume')
const User = require('../auth/User')

const Like = sequelize.define('Like', {
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

Like.belongsTo(Resume, { foreignKey: 'resumeId' }); // Определяем внешний ключ 'roleId'
Like.belongsTo(User, { foreignKey: 'userId' }); // Определяем внешний ключ 'roleId'

module.exports = Like;