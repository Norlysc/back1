const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserControllers");
router.use(express.json());


router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUserById);


router.post("/", UserController.addUser);
router.post("/:id", UserController.addUserAccount);


router.put("/:id", UserController.editUser);


router.delete("/:id", UserController.deleteUser);
router.delete("/:id/cuentas/:cuenta", UserController.deleteUserAccount);


module.exports = router;
