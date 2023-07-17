const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db')

const Follower = sequelize.define('Follower', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },  
},{
  timestamps: false, // Отключение автоматических полей createdAt и updatedAt
  }
);

module.exports = Follower;