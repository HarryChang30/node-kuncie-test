const { attributes } = require('structure');

const Cart = attributes({
  user_id: {
    type: Number,
    required: true
  }, 
  items: {
    type: Array,
    itemType: String,
  },
  actual_prices: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  final_prices: {
    type: Number,
  },
  is_checkout: {
    type: Boolean,
  }
})(class Cart {});


module.exports = Cart;