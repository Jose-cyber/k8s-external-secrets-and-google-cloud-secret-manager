const basicAuth = require('express-basic-auth')
require('dotenv').config()

const config = {
    challenge: true,
    users: {}
}
config.users[process.env.USER] = process.env.PASSWORD;

const authMiddleware = basicAuth(config);

module.exports = authMiddleware;