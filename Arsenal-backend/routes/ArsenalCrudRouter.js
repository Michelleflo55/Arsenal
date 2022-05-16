const Router = require('express').Router()
const controller = require('../controllers/ArsenalCrudController')

Router.get('/', controller.GetCrudArsenal)


module.exports = Router