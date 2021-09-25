const db = require('../models/db');

const ProductRepository = {
  findById: (id) => {
    return db.products.findByPk(id);
  },

  addProduct: (product) => {
    return db.products.create(product);
  },

  findByName: (product_name) => {
    return db.products.findOne({ where: { product_name }});
  }
};

module.exports = ProductRepository;