'use strict';

const UserRepository = require('../../infrastructure/repository/UserRepository');

module.exports = {
  create: (user) => UserRepository.create(user),
};