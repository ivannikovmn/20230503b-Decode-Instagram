const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db') //Импортируйте настройки подключения к базе данных
const Resume = require('../resume/models/Resume')
const User = require('../auth/User')

const Comment = sequelize.define('Comment', {
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

Comment.belongsTo(Resume, { foreignKey: 'resumeId' }); // Определяем внешний ключ 'roleId'
Comment.belongsTo(User, { foreignKey: 'userId' }); // Определяем внешний ключ 'roleId'

module.exports = Comment;