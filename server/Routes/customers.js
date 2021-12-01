const pg = require('../Config/pg')
const express = require('express')
const route = express.Router()

route.get('/', async (req, res) => {
    try {
        const customers = await pg(`select customer_uid, customer_fname, customer_sname, customer_email from customers where is_admin = false`)

        res.json(customers)
    } catch (e) {
        res.json(e)
    }
})

route.delete('/', async (req, res) => {
    try {
        const { customer_uid } = req.body

        if (customer_uid) {
            const deleteCustomer = await pg(`delete from customers where customer_uid = $1`, customer_uid)

            res.json(deleteCustomer)
        } else {
            res.json({ message: "wrong id" })
        }
    } catch (error) {
        res.json({ message: error.message })
    }
})

module.exports = route;
