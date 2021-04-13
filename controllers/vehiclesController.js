const catchAsync = require('./../utils/catchAsync')

exports.getAllVehicles = catchAsync(async (req, res, next) => {
    res.send('Hello from vehicles...')
})