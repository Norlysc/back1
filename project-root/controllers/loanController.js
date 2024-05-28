const fs = require("fs");
const path = require("path");
const Loan = require("../models/loan");
const dataPath = path.join(__dirname, "../data.json");

class LoanController {
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

  addLoan(req, res) {
    const { userId, amount, interestRate, nextPaymentDate } = req.body;
    const newLoan = new Loan(
      this.data.loans.length + 1,
      userId,
      amount,
      interestRate,
      nextPaymentDate
    );
    this.data.loans.push(newLoan);
    this.writeData(this.data);
    res.status(201).json(newLoan);
  }

  editLoan(req, res) {
    const { id } = req.params;
    const updatedLoan = req.body;
    const index = this.data.loans.findIndex((loan) => loan.id === parseInt(id));
    if (index !== -1) {
      this.data.loans[index] = { ...this.data.loans[index], ...updatedLoan };
      this.writeData(this.data);
      res.status(200).json(this.data.loans[index]);
    } else {
      res.status(404).json({ message: "Loan not found" });
    }
  }

  deleteLoan(req, res) {
    const { id } = req.params;
    const index = this.data.loans.findIndex((loan) => loan.id === parseInt(id));
    if (index !== -1) {
      this.data.loans.splice(index, 1);
      this.writeData(this.data);
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Loan not found" });
    }
  }

  getNextPaymentDate(req, res) {
    const { id } = req.params;
    const loan = this.data.loans.find((loan) => loan.id === parseInt(id));
    if (loan) {
      res.status(200).json({ nextPaymentDate: loan.nextPaymentDate });
    } else {
      res.status(404).json({ message: "Loan not found" });
    }
  }
}

module.exports = new LoanController();
