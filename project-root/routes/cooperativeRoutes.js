const express = require("express");
const router = express.Router();
const cooperativeController = require("../controllers/cooperativeController");

router.post("/cooperatives", (req, res) =>
  cooperativeController.addCooperative(req, res)
);
router.put("/cooperatives/:id", (req, res) =>
  cooperativeController.editCooperative(req, res)
);
router.delete("/cooperatives/:id", (req, res) =>
  cooperativeController.deleteCooperative(req, res)
);
router.get("/cooperatives/summary", (req, res) =>
  cooperativeController.getCooperativeSummary(req, res)
);

module.exports = router;
