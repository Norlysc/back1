const express = require("express");
const router = express.Router();
const savingsController = require("../controllers/savingsController");

router.post("/savings", (req, res) => savingsController.addSavings(req, res));
router.put("/savings/:id", (req, res) =>
  savingsController.editSavings(req, res)
);
router.delete("/savings/:id", (req, res) =>
  savingsController.deleteSavings(req, res)
);
router.get("/savings/:id/balance", (req, res) =>
  savingsController.getSavingsBalance(req, res)
);

module.exports = router;
