const Router = require('express').Router()
const PlayerRouter = require('./PlayerRouter.js')

Router.use('/players', PlayerRouter)

module.exports = Router