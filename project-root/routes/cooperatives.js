const express = require("express");
const router = express.Router();
const CooperativeController = require("../controllers/cooperativeControllers");

router.post("/:id", CooperativeController.addCooperative);
router.delete("/:id/:coop",CooperativeController.deleteUserFromCooperative);

module.exports = router;
