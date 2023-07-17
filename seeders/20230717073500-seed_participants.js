'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Participants', [
      { name: '_kz_al' },  
      { name: '_teremki' },  
      { name: '_mi.design' },                  
      { name: '_mikhail_ivannikov' },
      { name: 'milana_ivannikova' },
      { name: 'shokoladki_almaty' },
      { name: 'sport.motivation.almaty' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Participants', null, {});
  }
};
