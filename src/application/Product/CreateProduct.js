'use strict';

const ProductRepository = require('../../infrastructure/repository/ProductRepository');

module.exports = {
  create: (product) => ProductRepository.addProduct(product)
};