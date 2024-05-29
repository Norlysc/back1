const express = require("express");
const router = express.Router();
const CooperativeController = require("../controllers/CooperativeControllers");

router.post("/cooperatives", CooperativeController.addCooperative);
router.put("/cooperatives/:id", CooperativeController.editCooperative);
router.delete("/cooperatives/:id", CooperativeController.deleteCooperative);
router.post("/cooperatives/addMember", CooperativeController.addMember);
router.post("/cooperatives/removeMember", CooperativeController.removeMember);

module.exports = router;
