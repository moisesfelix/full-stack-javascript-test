const axios = require("axios");
module.exports = Object.freeze({
    async sign(req, res) {
        try {
            const response = await axios.post(`http://localhost:${process.env.AUTH_API_PORT}/api/auth/login`, req.body, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            res.send(response.data);
        } catch (err) {
            console.log(err);
        }
    },
    async signup(req, res) {
        try {
            const response = await axios.post(`http://localhost:${process.env.AUTH_API_PORT}/api/auth/signup`, req.body, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            res.send(response.data);
        } catch (err) {
            console.log(err);
        }
    }
});
