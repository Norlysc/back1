class Loan {
  constructor(id, userId, amount, interestRate, nextPaymentDate) {
    this.id = id;
    this.userId = userId;
    this.amount = amount;
    this.interestRate = interestRate;
    this.nextPaymentDate = nextPaymentDate;
  }
}

module.exports = Loan;
