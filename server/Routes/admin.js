const pg = require('../Config/pg')
const express = require('express')
const route = express.Router()

route.get('/', async (req, res) => {
    try {
        const admin = await pg(`select * from customers where customers.is_admin = true`)

        res.json(admin)
    } catch (e) {
        res.json({message: e.message})
    }
})

module.exports = route;
