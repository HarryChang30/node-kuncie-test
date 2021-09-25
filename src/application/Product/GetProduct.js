'use strict';

const ProductRepository = require('../../infrastructure/repository/ProductRepository');

module.exports = {
  ById: (id) => ProductRepository.findById(id)
};