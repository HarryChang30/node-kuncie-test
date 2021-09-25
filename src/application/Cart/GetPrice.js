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

const GetDiscountPrice = async (items) => {
  let discount_price = 0;
  let itemCondition = {};
  
  items.map((item) => itemCondition[item] != null ? itemCondition[item]++ : itemCondition[item] = 1);

  if (itemCondition['Google Home'] % 3 == 0) {
    const product = await GetProductByName('Google Home');
    discount_price += product.dataValues.price * Number(itemCondition['Google Home'] / 3);
  }

  if (itemCondition['Alexa Speaker'] >= 3) {
    const product = await GetProductByName('Alexa Speaker');
    discount_price += ((10 / 100) * product.dataValues.price) * Number(itemCondition['Alexa Speaker']);
  }

  const MacbookCondition = itemCondition['Macbook Pro'] + itemCondition['Raspberry Pi B'];
  if (MacbookCondition % 2 == 0) {
    const product = await GetProductByName('Raspberry Pi B');
    discount_price += product.dataValues.price * Number(itemCondition['Raspberry Pi B']);
  } else if (MacbookCondition > 2 && MacbookCondition % 2 != 0) {
    const product = await GetProductByName('Raspberry Pi B');
    discount_price += product.dataValues.price * (MacbookCondition - 1) / 2;
  }

  return discount_price;
};

const GetFinalPrice = async (items) => {
  const accumulated = await GetAccumulatedPrice(items);
  const discount = await GetDiscountPrice(items);
  const result = accumulated - discount;

  console.log(accumulated, discount, result);

  return {
    actual_prices: Math.round(accumulated * 100) / 100,
    discount: Math.round(discount * 100) / 100,
    final_prices: Math.round(result * 100) / 100
  };
};

module.exports = {
  accumulatePrice: (items) => GetAccumulatedPrice(items),
  discountPrice: (items) => GetDiscountPrice(items),
  finalPrice: (items) => GetFinalPrice(items)
};
