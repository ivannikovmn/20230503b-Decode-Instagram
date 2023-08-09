const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db') //Импортируйте настройки подключения к базе данных
// const Resume = require('./Resume')
const User = require('../auth/User')

const Follower = sequelize.define('Follower', {
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  }      
});

Follower.belongsTo(User, { foreignKey: 'userid' }); // (пользователь, за которым следят, именно так а не followedUserId, т.к уже в проекте фигурирует userid)
Follower.belongsTo(User, { foreignKey: 'followerUserId' }); // (пользователь, который следит за кем-то)

module.exports = Follower;
