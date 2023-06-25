const express = require("express");
const router = express.Router();

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

// Retrieve the list of existing payments
router.get("/payments", function (req, res) {
  res.send({
    payments: allPayments,
  });
});

// Generate a unique ID for a new payment
function generateUniqueID() {
  const characters = "ABCDEFGHIJLMNOPQRSTUVXYZ1234567890";
  let id = "";

  while (id.length < 7) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }

  return id;
}

// Create a new payment
router.post("/payments", function (req, res) {
  // Retrieve the payment data from the request body
  const { name, cardNumber, currency, amount } = req.body;

  // Validate the required fields
  if (!name || !cardNumber || !currency || !amount) {
    return res.status(400).send({ error: "Missing required fields" });
  }

  // Generate a unique ID for the payment
  const id = generateUniqueID();

  // Create a new payment object
  const payment = {
    id,
    name,
    cardNumber,
    currency,
    amount,
  };

  // Add the new payment to the payments array
  allPayments.push(payment);

  // Return a success response with the created payment
  res.status(201).send(payment);
});

module.exports = router;
