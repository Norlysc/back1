class loan {
  constructor(id, name, members = []) {
    this.id = id;
    this.name = name;
    this.members = members;
  }
}

module.exports = loan;
