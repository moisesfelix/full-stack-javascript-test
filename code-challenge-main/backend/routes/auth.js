const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const { sign, signup } = require("../controllers/auth");

const router = express.Router();

router.post("/auth/login", sign);
router.post("/auth/signup", signup);

module.exports = router;
