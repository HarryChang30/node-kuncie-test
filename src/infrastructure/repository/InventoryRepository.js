const db = require('../models/db');

const InventoryRepository = {
  findAll: () => {
    return db.inventories.findAll({
      include: {
        model: db.products
      },
      attributes: ['product_id', 'product.price', 'product.sku_code', 'product.product_name', 'qty']
    });
  },

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