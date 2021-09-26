const { attributes } = require('structure');

const Product = attributes({
  product_name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sku_code: {
    type: String,
    required: true
  }
})(class Product {});

module.exports = Product;