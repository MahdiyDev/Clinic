require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')

const express = require('express')
const app = express()

app.use(cors())
app.use(bodyParser.json())

// Import Routes
const clinicsRoute = require('../Routes/clinics')
const fieldsRoute = require('../Routes/fields')
const customersRoute = require('../Routes/customers')
const adminRoute = require('../Routes/admin')
const registerRoute = require('../Routes/register')
const loginRoute = require('../Routes/login')
const authRoute = require('../Routes/auth')
const queuesRoute = require('../Routes/queues')

// Routes
app.use('/clinics', clinicsRoute)
app.use('/fields', fieldsRoute)
app.use('/customers', customersRoute)
app.use('/admin', adminRoute)
app.use('/register', registerRoute)
app.use('/login', loginRoute)
app.use('/auth', authRoute)
app.use('/queues', queuesRoute)

app.listen(process.env.PORT, () => {
    console.log(`server running on http://localhost:${process.env.PORT}`);
})
