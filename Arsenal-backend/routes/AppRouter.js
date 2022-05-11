const Router = require('express').Router()
const PlayerRouter = require('./PlayerRouter.js')
const WeaponsRouter = require('./WeaponsRouter.js')
const FighterRouter = require('./FighterRouter')

Router.use('/players', PlayerRouter)
Router.use('/weapons', WeaponsRouter)
Router.use('/fighters', FighterRouter)

module.exports = Router