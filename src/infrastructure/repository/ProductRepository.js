const db = require('../models/db');

const ProductRepository = {
  findById: (id) => {
    return db.products.findByPk(id);
  },

  addProduct: (product) => {
    return db.products.create(product);
  }
};

module.exports = ProductRepository;