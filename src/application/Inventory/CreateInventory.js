'use strict';

const InventoryRepository = require('../../infrastructure/repository/InventoryRepository');

module.exports = {
  create: (inventory) => InventoryRepository.add(inventory)
};