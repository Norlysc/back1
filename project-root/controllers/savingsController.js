const fs = require("fs");
const path = require("path");
const Savings = require("../models/saving");
const dataPath = path.join(__dirname, "../data.json");

class SavingavingsController {
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

  addSavings(req, res) {
    const { userId, balance, interestRate } = req.body;
    const newSavings = new Savings(
      this.data.savings.length + 1,
      userId,
      balance,
      interestRate
    );
    this.data.savings.push(newSavings);
    this.writeData(this.data);
    res.status(201).json(newSavings);
  }

  editSavings(req, res) {
    const { id } = req.params;
    const updatedSavings = req.body;
    const index = this.data.savings.findIndex(
      (savings) => savings.id === parseInt(id)
    );
    if (index !== -1) {
      this.data.savings[index] = {
        ...this.data.savings[index],
        ...updatedSavings,
      };
      this.writeData(this.data);
      res.status(200).json(this.data.savings[index]);
    } else {
      res.status(404).json({ message: "Savings not found" });
    }
  }

  deleteSavings(req, res) {
    const { id } = req.params;
    const index = this.data.savings.findIndex(
      (savings) => savings.id === parseInt(id)
    );
    if (index !== -1) {
      this.data.savings.splice(index, 1);
      this.writeData(this.data);
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Savings not found" });
    }
  }

  getSavingsBalance(req, res) {
    const { id } = req.params;
    const savings = this.data.savings.find(
      (savings) => savings.id === parseInt(id)
    );
    if (savings) {
      res.status(200).json({ balance: savings.balance });
    } else {
      res.status(404).json({ message: "Savings not found" });
    }
  }
}

module.exports = new SavingavingsController();
