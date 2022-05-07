'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    const fighter = [





    ]
    await queryInterface.bulkInsert('fighters', fighter)
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('fighters')
  }
};
