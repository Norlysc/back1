const CooperativeModel = require("../models/cooperatives");

class CooperativeController {
  addCooperative(req, res) {
    const { name, members } = req.body;
    const newCooperative = CooperativeModel.createCooperative(name, members);
    res.status(201).json(newCooperative);
  }

  editCooperative(req, res) {
    const { id } = req.params;
    const { name, members } = req.body;
    const updatedCooperative = CooperativeModel.updateCooperative(
      id,
      name,
      members
    );
    if (updatedCooperative) {
      res.status(200).json(updatedCooperative);
    } else {
      res.status(404).send("Cooperative not found");
    }
  }

  deleteCooperative(req, res) {
    const { id } = req.params;
    const success = CooperativeModel.deleteCooperative(id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).send("Cooperative not found");
    }
  }

  addMember(req, res) {
    const { cooperativeId, userId } = req.body;
    const updatedCooperative = CooperativeModel.addMember(
      cooperativeId,
      userId
    );
    if (updatedCooperative) {
      res.status(200).json(updatedCooperative);
    } else {
      res.status(404).send("Cooperative or user not found");
    }
  }

  removeMember(req, res) {
    const { cooperativeId, userId } = req.body;
    const updatedCooperative = CooperativeModel.removeMember(
      cooperativeId,
      userId
    );
    if (updatedCooperative) {
      res.status(200).json(updatedCooperative);
    } else {
      res.status(404).send("Cooperative or user not found");
    }
  }
}

module.exports = new CooperativeController();
