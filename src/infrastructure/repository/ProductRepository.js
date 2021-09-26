const db = require('../models/db');
const Product = require('../../domain/Product');

const ProductRepository = {
  findById: (id) => {
    return db.products.findByPk(id);
  },

  addProduct: (data) => {
    const { errors } = new Product(data).validate();

    if (errors) {
      throw new Error('ValidationError');
    }

    return db.products.create(data);
  },

  findByName: (product_name) => {
    return db.products.findOne({ where: { product_name }});
  }
};

module.exports = ProductRepository;