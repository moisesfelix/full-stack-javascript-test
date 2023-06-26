const Users = require('../model/user')
const UserResources = require('../resources/user')
const jwt = require('../helpers/jwt')

module.exports = Object.freeze({
    async signup(req, res) {
        try {
            const { value, error } = UserResources.validateSignup(req.body)
            if (error) {
                return res.status(400).json(error)
            }
            const encryptedPass = UserResources.encryptPassword(value.password)

            const user = await Users.create({
                email: value.email,
                name: value.name,
                password: encryptedPass
            })

            return res.json({ success: true })
        } catch (err) {
            console.error(err)
            return res.status(500).send(err)
        }
    },
    async login(req, res) {
        try {
            const { value, error } = UserResources.validateLogin(req.body);
            if (error) {
                return res.status(400).json(error);
            }
            const user = await Users.getUserByEmail(value.email)
            if (!user) {
                return res.status(401).json({ err: 'unauthorized' })
            }
            const authenticted = UserResources.comparePassword(value.password, user.password)
            if (!authenticted) {
                return res.status(401).json({ err: 'unauthorized' })
            }
            const token = jwt.issue({ id: user._id, name: user.name }, '1d')
            return res.status(200).json({
                ok: true,
                token,
                name: user.name
            })
        } catch (err) {
            console.error(err)
            return res.status(500).send(err)
        }
    },
    isAuth(req, res) {
        try {
            const authorization = req.headers.authorization;
            if (!authorization || !authorization.startsWith('Bearer ')) {
                return res.status(401).json({ error: 'Invalid token' });
            }
            const token = authorization.split(" ")[1]
            if (token) {
                const decodedToken = jwt.verifyToken(token)
                console.log({ decodedToken })
                return res.status(200).json({
                    ok: true,
                    message: ""
                })
            }
            else {
                return res.status(400).json({
                    ok: false,
                    message: ""
                })

            }

        }
        catch (error) {
            console.error(error)
            return res.status(500).send(error)
        }
    }
})
