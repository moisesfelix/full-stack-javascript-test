const express = require("express");
const router = express.Router();
const ControllerUser = require("../controllers/user")
router.post("/auth/login", ControllerUser.login);
router.post("/auth/signup", ControllerUser.signup);
router.post("/auth/authenticator", ControllerUser.isAuth);

module.exports = router;
