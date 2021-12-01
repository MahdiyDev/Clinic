const pg = require('../Config/pg')
const express = require('express')
const route = express.Router()

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const fields = await pg(`select field_uid, field_name, clinic_name from fields
                                inner join clinics
                                on fields.field_clinic_uid = clinics.clinic_uid
                                where clinic_uid = $1`, id)

        res.json(fields)
    } catch (e) {
        res.json({message: e.message})
    }
})

// route.post('/', async (req, res) => {
//     try {
        
//     } catch (error) {
//         res.json({ message: error.message })
//     }
// })

module.exports = route;
