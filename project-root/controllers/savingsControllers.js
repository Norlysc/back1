const SavingModel = require("../models/savings");

class SavingController {
  addSaving(req, res) {
    const { userId, balance, interestRate } = req.body;
    const newSaving = SavingModel.createSaving(userId, balance, interestRate);
    res.status(201).json(newSaving);
  }

  editSaving(req, res) {
    const { id } = req.params;
    const { balance, interestRate } = req.body;
    const updatedSaving = SavingModel.updateSaving(id, balance, interestRate);
    if (updatedSaving) {
      res.status(200).json(updatedSaving);
    } else {
      res.status(404).send("Saving account not found");
    }
  }

  deleteSaving(req, res) {
    const { id } = req.params;
    const success = SavingModel.deleteSaving(id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).send("Saving account not found");
    }
  }

  getSavingDetails(req, res) {
    const { id } = req.params;
    const saving = SavingModel.getSavingById(id);
    if (saving) {
      res.status(200).json(saving);
    } else {
      res.status(404).send("Saving account not found");
    }
  }
}

module.exports = new SavingController();
