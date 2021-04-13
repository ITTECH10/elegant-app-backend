const express = require('express')
const vehiclesController = require('./../controllers/vehiclesController')

const router = express.Router()

router.route('/').get(vehiclesController.getAllVehicles)

module.exports = router