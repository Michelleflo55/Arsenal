'use strict';
  const falso = require('@ng');
const{Fighter} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const fighters = await Fighter.findAll({ raw:true })


    const players = [...Array(5)].map((a) => ({
      username: falso.randUserName(),
      password: falso.randPassword(),
      fighterId: fighters[Math.floor(Math.random() * fighters.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('players', players)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('players')
  }
};
