const express = require("express");
const router = express.Router();
const loanController = require("../controllers/loanController");

router.post("/loans", (req, res) => loanController.addLoan(req, res));
router.put("/loans/:id", (req, res) => loanController.editLoan(req, res));
router.delete("/loans/:id", (req, res) => loanController.deleteLoan(req, res));
router.get("/loans/:id/next-payment", (req, res) =>
  loanController.getNextPaymentDate(req, res)
);

module.exports = router;
