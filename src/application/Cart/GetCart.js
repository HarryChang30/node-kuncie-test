'use strict';

const CartRepository = require('../../infrastructure/repository/CartRepository');

module.exports = {
  ByUserId: (user_id) => CartRepository.findAll(user_id)
};