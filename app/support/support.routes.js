const { createToken } = require('./support.controllers')

const router = require('express').Router()

module.exports = (app) => {
    router.post('/create-token', createToken)

    return app.use('/api/v1/support', router)
}