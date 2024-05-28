const fs = require("fs");
const path = require("path");
const Cooperative = require("../models/Cooperative");
const dataPath = path.join(__dirname, "../data.json");

class CooperativeController {
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

  addCooperative(req, res) {
    const { name, members } = req.body;
    const newCooperative = new Cooperative(
      this.data.cooperatives.length + 1,
      name,
      members
    );
    this.data.cooperatives.push(newCooperative);
    this.writeData(this.data);
    res.status(201).json(newCooperative);
  }

  editCooperative(req, res) {
    const { id } = req.params;
    const updatedCooperative = req.body;
    const index = this.data.cooperatives.findIndex(
      (coop) => coop.id === parseInt(id)
    );
    if (index !== -1) {
      this.data.cooperatives[index] = {
        ...this.data.cooperatives[index],
        ...updatedCooperative,
      };
      this.writeData(this.data);
      res.status(200).json(this.data.cooperatives[index]);
    } else {
      res.status(404).json({ message: "Cooperative not found" });
    }
  }

  deleteCooperative(req, res) {
    const { id } = req.params;
    const index = this.data.cooperatives.findIndex(
      (coop) => coop.id === parseInt(id)
    );
    if (index !== -1) {
      this.data.cooperatives.splice(index, 1);
      this.writeData(this.data);
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Cooperative not found" });
    }
  }

  getCooperativeSummary(req, res) {
    const summary = {
      totalCapital: {
        savings: this.data.savings.reduce((acc, savings)),
      },
    };
  }
}
