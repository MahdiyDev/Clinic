require('dotenv').config()
const jwt = require('jsonwebtoken')

const setToken = (value) => {
    const token = jwt.sign(JSON.stringify(value), process.env.TOKEN)
    return token
}

module.exports = setToken;
