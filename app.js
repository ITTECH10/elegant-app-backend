const express = require('express')
const vehicleRouter = require('./routers/vehicleRouter')

const app = express()

// ROUTERS
app.use('/api/v1/vehicles', vehicleRouter)

module.exports = app;