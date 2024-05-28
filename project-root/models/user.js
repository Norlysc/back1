class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.accounts = {
      loans: [],
      savings: [],
      cooperatives: [],
    };
  }
}

module.exports = User;
