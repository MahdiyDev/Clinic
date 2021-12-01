const pg = require('../Config/pg')
const express = require('express')
const route = express.Router()

route.get('/', async (req, res) => {
    try {
        const clinics = await pg('select * from clinics')

        res.json(clinics)
    } catch (e) {
        res.json({ message: e.message })
    }
})

// route.post('/', async (req, res) => {
//     try {
        
//     } catch (error) {
//         res.json({ message: error.message })
//     }
// })

// route.delete('/:id', async (req, res) => {
//     try {
        
//     } catch (error) {
//         res.json({ message: error.message })
//     }
// })

module.exports = route;
