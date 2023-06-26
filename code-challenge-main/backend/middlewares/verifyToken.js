const axios = require("axios");

const verifyToken = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization || !authorization.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        const token = authorization.split(' ')[1];
        const response = await axios.post(
            `http://localhost:${process.env.AUTH_API_PORT}/api/auth/authenticator`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        req.token = response.token;
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = verifyToken;
