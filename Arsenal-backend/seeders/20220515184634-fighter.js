'use strict';
const falso = require('@ngneat/falso')
const { Player } = require('../models')

module.exports = {
 up: async (queryInterface, Sequelize) => {
   const player = await Player.findAll({ raw: true })
   const fighter = [
     {
      name: '2852',
      image: 'https://i.ibb.co/gg1hxyj/2852.png',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     }, 
     {
      name: '7498',
      image: 'https://pbs.twimg.com/media/FSAki2qakAAsr0T?format=jpg&name=medium',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '2119',
      image: 'https://pbs.twimg.com/media/FSAelBEXMAEZy3R?format=jpg&name=small',
      health: falso.randNumber({ min: 70, max: 100 }),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '7696',
      image: 'https://lh3.googleusercontent.com/NkPcV1ODwfqQKwaEqINuK5dgllI1l7SeoQlHmXL2o_UrAyxeewohMnnw5xFUICs30IMXMkT-iTxch7oVNzccNit6HClWDnYl8IHEmA=s0',
      health: falso.randNumber({ min: 70, max: 100 }),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '1560',
      image: 'https://lh3.googleusercontent.com/FP-TmXg-ol5k05fa4iDrUBvgXaYbwA7xB_NOTYcHHO5D-O1evPEeuNmvMhyfgKrkb4nhswie7R674SuG0vnoHFK5BJnn0By5kb0IRHM=s0',
      health: falso.randNumber({ min: 70, max: 100 }),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '4706',
      image: 'https://lh3.googleusercontent.com/0rAuDl6OQC9php1RwnHZsNe49r5-DC7P0TQVH0jGz4kzmh1kNADwb3dLpU01a9pbN5y5ij2cTTBRQwfHA1pesOuFRZ6yyGh0ClYcmds=s0',
      health: falso.randNumber({ min: 70, max: 100 }),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '9744',
      image: 'https://lh3.googleusercontent.com/vMZc2VfQvYXAwUhKOcbw2t2QPNXXSobTTfAXlzJAafcHEemAcEgh8yzGCk3DXVnlQgn3TvO1K4z0ZU65AAOjr5WYztP3qTPzSyRLuw=s0',
      health: falso.randNumber({ min: 70, max: 100 }),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '3821',
      image: 'https://pbs.twimg.com/media/FSAd3M9WYAIT-We?format=jpg&name=large',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '5820',
      image: 'https://pbs.twimg.com/media/FSAd3M8XsAA4Xdc?format=jpg&name=large',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '9838',
      image: 'https://lh3.googleusercontent.com/JDgudX5U37wDdOdbxQ3FRiwRrygsipkEFYrahwQ2tDamVw6qts7We3a4oHPVxSs32vVnZKcfHvALswR1rRXO8CQGif5ZfZFTUVRCeA=s0',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '9381',
      image: 'https://lh3.googleusercontent.com/HCScMayl6NZzF0x_eQeDZjgav7--PU7-TnPjJxyZdfSHXZNXTOJ3fo3iCqXdN9yxsEBMNZbyUu2GicGHTWhWgSRbHJfPqaI9JqZe=s0',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '8122',
      image: 'https://lh3.googleusercontent.com/7awa6iHDF5KCPJeDqItADYi7kIz786B5T7MYzFZ7qQUE06XTmiBSYXadPBmN5V2jZ-Z_1ffjWeGKGXhA79a1c73ZmtCleCTuQ1fv4uM=s0',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '9983',
      image: 'https://lh3.googleusercontent.com/Lb4qKfp4d9pf5_04wowkTwRvb6JucDlMn_3WpBv4WLpXGtrJWMs3Ask1a6hAKuWH6GE1HuJO-bUEa2hkM6DyAiBtMUZJnAk_6D4k7A=s0',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '3686',
      image: 'https://lh3.googleusercontent.com/5WhP1KzcSJeTgJwmLdqt_rZ0rxkrZ7HvG1pOab2IoO_AmrTw5QHAks1P8ZnR9vXqTDgzJkv3UprgPWzwmv-8W7N2dNl191G5BZOrv8k=s0',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '4632',
      image: 'https://lh3.googleusercontent.com/5fKb4hqn1UvAhXSYn2F4hi5lrJzL6SAPAWDu5ai7ClCNd9Z80HTRmw8ry_QHbVw56VOMXzaphMwx5JAT0sYPrBNxsaAI5pOacBvw=s0',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '9163',
      image: 'https://lh3.googleusercontent.com/ap2xsqkHVCZFGXAg3gFEYmWz4FmfUk9CW1ObQgmH2gnUYVESJA5bhpSlSpY0CinvMHoJ9N-e5YG__kIUmn7H0lpwuujBz4g6Oh6rkg=s0',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '5410',
      image: 'https://lh3.googleusercontent.com/Ewm5fVuvkMwq6el3X7_i9yvaSjc7ipswzvdv77g3b3iEMXWaQVuehVqpv6NINxUl-qRc7uU05EkjVJRY8Cux2PqpJzkquv2ibrpU7jU=s0',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '8582',
      image: 'https://pbs.twimg.com/media/FSArSs9VUAIfhDU?format=jpg&name=medium',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '6207',
      image: 'https://lh3.googleusercontent.com/aRlSsLnjsMY-sbNoOofynOPVtPmEQR8h0N7Qr3irmLrZZKPI-vGGa-X_JCGBwlz_jnxiHVw9voNhXug2hwtnr3HIqdjlByvNJzz9=s0',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '2592',
      image: 'https://pbs.twimg.com/media/FSA5ay_XsAkeUeB?format=jpg&name=medium',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '1548',
      image: 'https://lh3.googleusercontent.com/r7DIhN1j-93yIVeNco3UyKDiSvkolD7wpdAcVfLEcGxFnN2492OWkMNU6P-bMFpqLJFi7IAPVvtbWDzEmZD14GA02AI4rOZmce05GQ=s0',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     }, 
     {
      name: '9126',
      image: 'https://lh3.googleusercontent.com/0XoYag-qS884tAlz2N-is0sQv4PeOLNz6_1Ci9IfywoHhsuuQyZTp6C7eW93OGzEvyqfgJT-zrQ4NB_ePl78jrKNTve-lU1tRMXT3w=s0',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: '1286',
      image: 'https://lh3.googleusercontent.com/SIg-Qfoopo9OJMc1bPLQUYvjKhHu1xnDhoTbuzqm0rkNh5k8Nvl6ywOqP5vmR_onRBmx6fD85VKPxRHmRfFpa-yUCmHoROpzdDs0ag=s0',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     }, 
     {
      name: '796',
      image: 'https://lh3.googleusercontent.com/UIuKflTTinv_627BlkPsAhk4udIM4N1TPbrjagjXOlcd5E4FRoSqzKV0at42M99j574INyQwGiRI0xt61yUBFvo9z0lPzhaMmGsjTTE=s0',
      health: falso.randNumber({ min: 70, max: 100 }),
      playerId: player[Math.floor(Math.random() * player.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },  
   ]
   await queryInterface.bulkInsert('fighters', fighter)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('fighters')
  }
};