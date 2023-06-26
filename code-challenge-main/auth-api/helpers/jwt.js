const jwt = require('jsonwebtoken')
const PAYMENT_API_KEY = process.env.PAYMENT_API_KEY
module.exports = {
    issue(payload, expiresIn) {

        return jwt.sign(payload, PAYMENT_API_KEY, {
            expiresIn
        })
    },
    verifyToken(token) {
        const PAYMENT_API_KEY = process.env.PAYMENT_API_KEY
        return jwt.verify(token, PAYMENT_API_KEY)
    }
}
