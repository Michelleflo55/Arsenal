'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    const choose_weapons = [
      {
        name: 'Bloody knuckles',
        speed: 10,
        power: 3,
        image:'https://i.ibb.co/sCQ3MMn/bloody-handwraps.png' ,
        damageLevel: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nunchucks',
        speed: 7,
        power: 3,
        image: 'https://i.ibb.co/jMLB6B7/nunchucks.png',
        damageLevel: 10.5,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Brass knuckles',
        speed: 4,
        power: 7,
        image: 'https://i.ibb.co/v42dFDG/brass-knuckles.png',
        damageLevel: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spiked club',
        speed: 3,
        power: 9,
        image: 'https://i.ibb.co/ftMKsk3/spiked-club.png',
        damageLevel: 13.5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Throwing stars',
        speed: 6,
        power: 4,
        image: 'https://i.ibb.co/2YHrx91/throwing-stars.png',
        damageLevel: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]
    await queryInterface.bulkInsert('choose_weapons', choose_weapons)
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('choose_weapons')
  }
};