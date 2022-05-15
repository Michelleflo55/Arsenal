const { Player } = require('../models')

const GetPlayers = async ( req,res ) => {
    try {
        const players = await Player.findAll()
        res.send(players)
    } catch (error) {
        throw(error)
    }
}

const GetPlayer = async ( req, res ) => {
    try {
      const player = await Player.findByPk( req.params.id)
      res.send(player)  
    } catch (error) {
       throw(error) 
    }
}

module.exports = {
    GetPlayers,
    GetPlayer
}