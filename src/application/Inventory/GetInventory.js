'use strict';

const InventoryRepository = require('../../infrastructure/repository/InventoryRepository');

const ShowAllInventory = async () => {
  const inventories = await InventoryRepository.findAll();
  
  let result = [];

  inventories.map((obj) => {
    const inventory = obj.dataValues;
    const product = inventory.product.dataValues;
    const dataObj = {
      product_id: inventory.product_id,
      qty: inventory.qty,
      product_name: product.product_name,
      product_price: product.price,
      product_sku_code: product.sku_code
    };
    result.push(dataObj);
  });
  
  return result;
};

module.exports = {
  ByProductId: (id) => InventoryRepository.findByProductId(id),
  ShowAll: () => ShowAllInventory()
};