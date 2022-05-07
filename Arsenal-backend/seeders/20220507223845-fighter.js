'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    const fighter = [
      {
        name: '#8582',
        image: 'https://lh3.googleusercontent.com/SeCnyjmKlM2-MWLlx7tNI_kMyki8gg4SdjGW-EY9aQk10oROiDpbkWv225zWLSI93m9MVApRxc2gzR6ZMwbq83KKMr8uQHT3Nz0kOYk=w600',
        health: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      }




    ]
    await queryInterface.bulkInsert('fighters', fighter)
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('fighters')
  }
};
