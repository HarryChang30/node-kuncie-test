const db = require('../models/db');

const UserRepository = {
  findById: (id) => {
    return db.users.findByPk(id);
  },

  create:(user) => {
    return db.users.create(user);
  }
};

module.exports = UserRepository;