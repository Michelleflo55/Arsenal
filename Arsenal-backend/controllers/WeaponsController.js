const { Choose_weapons } = require('../models')

const GetWeapons = async ( req, res ) => {
    try {
        const weapons = await Choose_weapons.findAll()
        res.send(weapons)
    } catch (error) {
        throw(error)
    }
}

module.exports = {
    GetWeapons
}