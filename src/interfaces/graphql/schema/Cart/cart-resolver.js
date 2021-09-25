const GetPrice = require('../../../../application/Cart/GetPrice');
const GetCart = require('../../../../application/Cart/GetCart');

const CartResolver = {
  Query: {
    cart: (parent, args) => {
      return GetCart.ByUserId(args.user_id);
    },
    cartAccumulatedPrice: (parent, args) => {
      const { items } = args;
      return GetPrice.accumulatePrice(items);
    },
    discountPrice: (parent, args) => {
      const { items } = args;
      return GetPrice.discountPrice(items);
    },
    finalPrice: (parent, args) => {
      const { items } = args;
      return GetPrice.finalPrice(items);
    }
  },
  Mutation: {
  }
};

module.exports = CartResolver;