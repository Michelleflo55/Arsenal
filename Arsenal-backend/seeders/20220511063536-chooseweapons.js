'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    const choose_weapons = [
      {
        name: 'Bloody knuckles',
        speed: 10,
        power: 3,
        image:'file:///Users/bubbies/Desktop/weapons/bloody%20handwraps%20png.png' ,
        damageLevel: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nunchucks',
        speed: 7,
        power: 3,
        image: 'file:///Users/bubbies/Desktop/weapons/nunchucks%20png.png',
        damageLevel: 10.5,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Brass knuckles',
        speed: 4,
        power: 7,
        image: 'file:///Users/bubbies/Desktop/weapons/brass%20knuckles%20png.png',
        damageLevel: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spiked club',
        speed: 3,
        power: 9,
        image: 'file:///Users/bubbies/Desktop/weapons/spiked%20club%20png.png',
        damageLevel: 13.5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Throwing stars',
        speed: 6,
        power: 4,
        image: 'file:///Users/bubbies/Desktop/weapons/throwing%20stars%20png.png',
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
