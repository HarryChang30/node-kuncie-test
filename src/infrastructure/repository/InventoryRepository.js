const db = require('../models/db');
const Inventory = require('../../domain/Inventory');

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

  add: (data) => {
    const { errors } = new Inventory(data).validate();

    if (errors) {
      throw new Error('ValidationError');
    }

    return db.inventories.create(data);
  },

  updateQty: (product_id, qty) => {
    return db.inventories.update({ qty }, { where: { product_id }});
  }
};

module.exports = InventoryRepository;