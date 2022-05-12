const Router = require('express').Router()
const PlayerRouter = require('./PlayerRouter.js')
const WeaponsRouter = require('./WeaponsRouter.js')
const FighterRouter = require('./FighterRouter.js')
const MyArsenalRouter = require('./MyArsenalRouter.js')

Router.use('/players', PlayerRouter)
Router.use('/weapons', WeaponsRouter)
Router.use('/fighters', FighterRouter)
Router.use('/myArsenal', MyArsenalRouter)

module.exports = Router