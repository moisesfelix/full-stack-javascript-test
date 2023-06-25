var express = require("express");
var router = express.Router();

// A fake database of payments.
//
// Each payment is identified by its `id`. All fields are required.
//
// Modifying `allPayments` is ok for the purposes of the test.
const allPayments = [
  {
    id: "example-a",
    name: "Anne Alpaca",
    cardNumber: "1111222233334444",
    currency: "GBP",
    amount: "1.23",
  },
  {
    id: "example-b",
    name: "Ben Bear",
    cardNumber: "2222333344445555",
    currency: "EUR",
    amount: "2.34",
  },
  {
    id: "example-c",
    name: "Carol Crane",
    cardNumber: "2222333344445555",
    currency: "EUR",
    amount: "2.34",
  },
];

router.get("/payments", function (req, res) {
  res.send({
    payments: allPayments,
  });
});

router.post("/payments", function (req, res) {
  res.status(500).send({ error: "Not implemented" });
});

module.exports = router;
