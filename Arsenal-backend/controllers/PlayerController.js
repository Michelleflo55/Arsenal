const { Player } = require('../models')

const GetPlayers = async ( req,res ) => {
    try {
        const players = await Player.findAll()
        res.send(players)
    } catch (error) {
        throw(error)
    }
}

module.exports ={
    GetPlayers
}