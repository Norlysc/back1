const fs = require("fs");
const path = require("path");
const user = require("../models/");
const dataPath = path.join(__dirname, "../data.json");

class userController {
  constructor() {
    this.data = this.readData();
  }

  readData() {
    const rawData = fs.readFileSync(dataPath);
    return JSON.parse(rawData);
  }

  writeData(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  }

  addUser(req, res) {
    const { name, email } = req.body;
    const newUser = new User(this.data.users.length + 1, name, email);
    this.data.users.push(newUser);
    this.writeData(this.data);
    res.status(201).json(newUser);
  }

  editUser(req, res) {
    const { id } = req.params;
    const updatedUser = req.body;
    const index = this.data.users.findIndex((user) => user.id === parseInt(id));
    if (index !== -1) {
      this.data.users[index] = { ...this.data.users[index], ...updatedUser };
      this.writeData(this.data);
      res.status(200).json(this.data.users[index]);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }

  deleteUser(req, res) {
    const { id } = req.params;
    const index = this.data.users.findIndex((user) => user.id === parseInt(id));
    if (index !== -1) {
      this.data.users.splice(index, 1);
      this.writeData(this.data);
      res.status(204).send();
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }

  getUserAccounts(req, res) {
    const { id } = req.params;
    const user = this.data.users.find((user) => user.id === parseInt(id));
    if (user) {
      res.status(200).json({ accounts: user.accounts });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }

  addUserToCooperative(req, res) {
    const { userId, coopId } = req.params;
    const user = this.data.users.find((user) => user.id === parseInt(userId));
    if (user) {
      user.accounts.cooperatives.push(parseInt(coopId));
      this.writeData(this.data);
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }
}

module.exports = new userController();
