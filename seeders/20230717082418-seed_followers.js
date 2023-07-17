'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Followers', [      
      { name: '_mi.design' },                  
      { name: 'sport.motivation.almaty' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Followers', null, {});
  }
};
