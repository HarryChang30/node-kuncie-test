const GetPrice = require('../../../../application/Cart/GetPrice');
const GetCart = require('../../../../application/Cart/GetCart');
const AddCart = require('../../../../application/Cart/AddCart');

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
    finalPrice: async (parent, args) => {
      const { items } = args;
      return GetPrice.finalPrice(items);
    }
  },
  Mutation: {
    addCart: (parent, args) => {
      const cart = {
        user_id: args.user_id,
        items: args.items,
        actual_prices: args.actual_prices,
        discount: args.discount,
        final_prices: args.final_prices
      };
      return AddCart.Create(cart);
    }
  }
};

module.exports = CartResolver;