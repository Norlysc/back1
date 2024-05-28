const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/users", (req, res) => userController.addUser(req, res));
router.put("/users/:id", (req, res) => userController.editUser(req, res));
router.delete("/users/:id", (req, res) => userController.deleteUser(req, res));
router.get("/users/:id/accounts", (req, res) =>
  userController.getUserAccounts(req, res)
);
router.put("/users/:userId/cooperatives/:coopId", (req, res) =>
  userController.addUserToCooperative(req, res)
);

module.exports = router;
