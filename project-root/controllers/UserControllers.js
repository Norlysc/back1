const UserModel = require("../models/users");

class UserController {
  addUser(req, res) {
    const { name, email } = req.body;
    const newUser = UserModel.createUser(name, email);
    res.status(201).json(newUser);
  }

  editUser(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;
    const updatedUser = UserModel.updateUser(id, name, email);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).send("User not found");
    }
  }

  deleteUser(req, res) {
    const { id } = req.params;
    const success = UserModel.deleteUser(id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).send("User not found");
    }
  }

  getUserAccounts(req, res) {
    const { id } = req.params;
    const user = UserModel.getUserById(id);
    if (user) {
      res.status(200).json(user.accounts);
    } else {
      res.status(404).send("User not found");
    }
  }
}

module.exports = new UserController();
