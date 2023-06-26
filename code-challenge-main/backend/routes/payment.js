const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const { getAllPayments, createPayment } = require("../controllers/payment");
const router = express.Router();

router.get("/payments", verifyToken, getAllPayments);
router.post("/payments", verifyToken, createPayment);

module.exports = router;
