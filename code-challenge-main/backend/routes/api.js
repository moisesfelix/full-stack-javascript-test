var express = require("express");
var router = express.Router();
var axios = require("axios");

router.get("/", function (req, res) {
  res.send({ service: "backend:api", ok: true });
});

router.get("/payments", function (req, res) {
  axios
    .get(`http://localhost:${process.env.PAYMENT_API_PORT}/api/payments`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/payments", function (req, res) {
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
});

module.exports = router;
