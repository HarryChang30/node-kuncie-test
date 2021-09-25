'use strict';

const CartRepository = require('../../infrastructure/repository/CartRepository');

module.exports = {
  Create: (cart) => CartRepository.create(cart)
};