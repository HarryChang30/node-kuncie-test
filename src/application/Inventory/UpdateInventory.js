'use strict';

const InventoryRepository = require('../../infrastructure/repository/InventoryRepository');

module.exports = {
  updateQuantity: (product_id, qty) => InventoryRepository.updateQty(product_id, qty)
};