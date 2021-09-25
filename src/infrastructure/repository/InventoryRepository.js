const db = require('../models/db');

const InventoryRepository = {
  findByProductId: (id) => {
    return db.inventories.findOne({ where: { product_id: id }});
  },

  add: (inventory) => {
    return db.inventories.create(inventory);
  },

  updateQty: (product_id, qty) => {
    return db.inventories.update({ qty }, { where: { product_id }});
  }
};

module.exports = InventoryRepository;