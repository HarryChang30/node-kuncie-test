'use strict';

const UserRepository = require('../../infrastructure/repository/UserRepository');

module.exports = {
  ById: (id) => UserRepository.findById(id),
};