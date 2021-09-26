const { attributes } = require('structure');

const Inventory = attributes({
  product_id: {
    type: Number,
    required: true
  },
  qty: {
    type: Number,
    required: true
  }
})(class Inventory{});

module.exports = Inventory;