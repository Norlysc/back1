const express = require("express");
const router = express.Router();
const LoanController = require("../controllers/LoanController");

router.post("/", LoanController.addLoan);
router.put("/:id", LoanController.editLoan);
router.delete("/:id", LoanController.deleteLoan);
router.get("/:id", LoanController.getLoanDetails);

module.exports = router;
