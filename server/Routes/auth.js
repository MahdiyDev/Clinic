require('dotenv').config()
const jwt = require('jsonwebtoken')
const express = require('express')
const route = express.Router()

route.post('/', async (req, res) => {
    try {
        const { authorization } = req.headers
        const token = JSON.parse(authorization).split(' ')[1]

        const authUser = jwt.verify(token, process.env.TOKEN)

        res.json(authUser)
    } catch (e) {
        res.json({ message: e.message })
    }
})

module.exports = route;
