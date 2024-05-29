const LoanModel = require("../models/loans");

class LoanController {
  addLoan(req, res) {
    const { userId, amount, interestRate, nextPaymentDate } = req.body;
    const newLoan = LoanModel.createLoan(
      userId,
      amount,
      interestRate,
      nextPaymentDate
    );
    res.status(201).json(newLoan);
  }

  editLoan(req, res) {
    const { id } = req.params;
    const { amount, interestRate, nextPaymentDate } = req.body;
    const updatedLoan = LoanModel.updateLoan(
      id,
      amount,
      interestRate,
      nextPaymentDate
    );
    if (updatedLoan) {
      res.status(200).json(updatedLoan);
    } else {
      res.status(404).send("Loan not found");
    }
  }

  deleteLoan(req, res) {
    const { id } = req.params;
    const success = LoanModel.deleteLoan(id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).send("Loan not found");
    }
  }

  getLoanDetails(req, res) {
    const { id } = req.params;
    const loan = LoanModel.getLoanById(id);
    if (loan) {
      res.status(200).json(loan);
    } else {
      res.status(404).send("Loan not found");
    }
  }
}

module.exports = new LoanController();
