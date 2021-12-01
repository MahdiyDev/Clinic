const pg = require('../Config/pg')
const express = require('express')
const route = express.Router()

route.get('/', async (req, res) => {
    try {
        const queues = await pg(`select queue_uid, customer_fname, customer_sname, customer_email, field_name, clinic_name from queues
                            inner join customers
                            on queues.queue_customer_uid = customers.customer_uid
                            inner join fields
                            on queues.queue_field_uid = fields.field_uid
                            inner join clinics
                            on fields.field_clinic_uid = clinics.clinic_uid`)

        res.json(queues)
    } catch (error) {
        res.json({ message: error.message })
    }
})

route.post('/', async (req, res) => {
    try {
        const { queue_customer_uid, queue_field_uid } = req.body

        const queues = await pg(`insert into queues(queue_uid, queue_customer_uid,queue_field_uid) values(uuid_generate_v4(), $1, $2) returning *`, 
        queue_customer_uid, queue_field_uid )

        res.json(queues)
    } catch (error) {
        res.json({ message: error.message })
    }
})

route.delete('/', async (req, res) => {
    try {
        const { queue_uid } = req.body

        if (queue_uid) {
            const deleteQueue = await pg(`delete from queues where queue_uid = $1`, queue_uid)

            res.json(deleteQueue)
        } else {
            res.json({ message: "wrong id" })
        }
    } catch (error) {
        res.json({ message: error.message })
    }
})

module.exports = route;
