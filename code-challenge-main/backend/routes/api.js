const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const { getAllPayments, createPayment } = require("../controllers/payment");

const router = express.Router();

router.get("/", function (req, res) {
  res.send({ service: "backend:api", ok: true });
});

router.get("/payments", verifyToken, getAllPayments);

router.post("/payments", verifyToken, createPayment);

module.exports = router;
