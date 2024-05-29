const express = require("express");
const router = express.Router();
const SavingController = require("../controllers/SavingControllers");

router.post("/savings", SavingController.addSaving);
router.put("/savings/:id", SavingController.editSaving);
router.delete("/savings/:id", SavingController.deleteSaving);
router.get("/savings/:id", SavingController.getSavingDetails);

module.exports = router;
