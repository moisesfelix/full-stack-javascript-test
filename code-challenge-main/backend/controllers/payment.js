
const axios = require("axios");
module.exports = Object.freeze({
    getAllPayments(req, res) {
        axios
            .get(`http://localhost:${process.env.PAYMENT_API_PORT}/api/payments`)
            .then((response) => {
                res.send(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    createPayment(req, res) {
        axios
            .post(`http://localhost:${process.env.PAYMENT_API_PORT}/api/payments`, req.body, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                res.send(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
});
