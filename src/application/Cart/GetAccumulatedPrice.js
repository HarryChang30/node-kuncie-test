'use strict';

const ProductRepository = require('../../infrastructure/repository/ProductRepository');

const GetProductByName = (product_name) => ProductRepository.findByName(product_name);

const GetAccumulatedPrice = async (items) => {
  let actual_price = 0;

  for (let i = 0; i < items.length; i++) {
    const product = await GetProductByName(items[i]);
    actual_price += Number(product.dataValues.price);
  }

  return actual_price;
};

module.exports = {
  get: (items) => GetAccumulatedPrice(items)
};
