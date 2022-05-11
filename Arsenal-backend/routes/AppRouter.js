const Router = require('express').Router()
const PlayerRouter = require('./PlayerRouter.js')
const WeaponsRouter = require('./WeaponsRouter.js')

Router.use('/players', PlayerRouter)
Router.use('/weapons', WeaponsRouter)

module.exports = Router