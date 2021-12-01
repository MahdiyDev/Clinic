const pg = require('../Config/pg')
const setToken = require('../Config/jwt')
const express = require('express')
const route = express.Router()

route.post('/', async (req, res) => {
    try {
        const { customer_fname, customer_sname, customer_email, customer_password } = req.body

        const customer = await pg(`
            select customer_uid, customer_fname, customer_sname, is_admin from customers where customer_email = $1 and customer_password = $2
        `, customer_email, customer_password )

        if (!customer.length) {
            const newCustomer = await pg(`insert into customers(customer_uid, customer_fname, customer_sname, customer_email, customer_password)
            values(uuid_generate_v4(), $1, $2, $3, $4 ) returning customer_uid, customer_fname, customer_sname, customer_email
            `, customer_fname, customer_sname, customer_email, customer_password )

            const token = setToken(newCustomer[0])

            res.json({ accessToken: token })            
        } else {
            res.json({ message: 'user found try other email or password' })
        }
    } catch (error) {
        res.json({ message: error.message })
    }
})

module.exports = route;
