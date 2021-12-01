const pg = require('../Config/pg')
const setToken = require('../Config/jwt')
const express = require('express')
const route = express.Router()

route.post('/', async (req, res) => {
    try {
        const { customer_email, customer_password } = req.body

        
        const newCustomer = await pg(`
        select customer_uid, customer_fname, customer_sname, customer_email, is_admin from customers where customer_email = $1 and customer_password = $2
        `, customer_email, customer_password )
        
        console.log(newCustomer);

        const token = setToken(newCustomer[0])

        res.json({ accessToken: token })
    } catch (error) {
        res.json({ message: error.message })
    }
})

module.exports = route;
