const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET
module.exports = {
    issue(payload, expiresIn) {

        return jwt.sign(payload, SECRET, {
            expiresIn
        })
    },
    verifyToken(token) {
        const SECRET = process.env.SECRET
        return jwt.verify(token, SECRET)
    }
}
