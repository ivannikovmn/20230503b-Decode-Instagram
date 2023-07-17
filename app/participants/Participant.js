const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db')

const Participant = sequelize.define('Participant', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },  
},{
  timestamps: false, // Отключение автоматических полей createdAt и updatedAt
  }
);

module.exports = Participant;