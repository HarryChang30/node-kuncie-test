const GetAccumulatedPrice = require('../../../../application/Cart/GetAccumulatedPrice');
const GetCart = require('../../../../application/Cart/GetCart');

const CartResolver = {
  Query: {
    cart: (parent, args) => {
      return GetCart.ByUserId(args.user_id);
    },
    cartAccumulatedPrice: (parent, args) => {
      const { items } = args;
      return GetAccumulatedPrice.get(items);
    }
  },
  Mutation: {
  }
};

module.exports = CartResolver;