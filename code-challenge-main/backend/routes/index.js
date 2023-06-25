var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send({ service: "backend", ok: true });
});

module.exports = router;
