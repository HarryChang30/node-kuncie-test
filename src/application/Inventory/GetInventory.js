'use strict';

const InventoryRepository = require('../../infrastructure/repository/InventoryRepository');

module.exports = {
  ByProductId: (id) => InventoryRepository.findByProductId(id)
};