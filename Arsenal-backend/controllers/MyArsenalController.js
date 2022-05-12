const { My_arsenal, Player, Choose_weapons} = require('../models')

const GetMyArsenal = async (req, res) => {
    try {
       const arsenal = await Player.findAll({
           include: [
               {
                   model: Choose_weapons,
                   as: 'arsenal'
               }
           ]
       })
       res.send(arsenal) 
    } catch (error) {
        throw(error)
    }
}

module.exports = {
    GetMyArsenal
}