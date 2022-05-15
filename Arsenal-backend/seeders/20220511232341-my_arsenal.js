'use strict';
const { Player, Choose_weapons } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const players = await Player.findAll({ raw:true })
    
    const chooseWeapons = await Choose_weapons.findAll({ raw: true })
    
    const my_arsenal = chooseWeapons.map((a) => ({
      playerId: players[Math.floor(Math.random() * players.length)].id,
      choose_WeaponsId: chooseWeapons[Math.floor(Math.random() * chooseWeapons.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('my_arsenals', my_arsenal)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('my_arsenals')
  }
};
