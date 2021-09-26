const db = require('../models/db');
const User = require('../../domain/User');

const UserRepository = {
  findById: (id) => {
    return db.users.findByPk(id);
  },

  create:(data) => {
    
    const { errors } = new User(data).validate();
    
    if (errors) {
      throw new Error('ValidationError');
    } 

    return db.users.create(data);
  }
};

module.exports = UserRepository;