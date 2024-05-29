const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserControllers");

router.post("/", UserController.addUser);
router.put("/:id", UserController.editUser);
router.delete("/:id", UserController.deleteUser);
router.get("/:id/accounts", UserController.getUserAccounts);

module.exports = router;
