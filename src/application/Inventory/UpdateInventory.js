'use strict';

const InventoryRepository = require('../../infrastructure/repository/InventoryRepository');

module.exports = {
  updateQuantity: (product_id, qty) => {
    const updated = InventoryRepository.updateQty(product_id, qty);
    if (updated) return 'success';
    return 'failed';
  }
};