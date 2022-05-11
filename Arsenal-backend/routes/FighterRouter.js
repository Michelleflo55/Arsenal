const Router = require('express').Router()
const controller = require('../controllers/FighterController')

Router.get('/', controller.GetFighters)
Router.get('/:id', controller.GetFighter)

module.exports = Router