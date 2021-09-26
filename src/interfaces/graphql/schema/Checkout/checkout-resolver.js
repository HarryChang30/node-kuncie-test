const CheckoutConfirmation = require('../../../../application/Checkout/Confirmation');

const CheckoutResolver = {
  Mutation: {
    confirmation: async (parent, args) => {
      return await CheckoutConfirmation.confirmation(args.checkout_id);
    }
  }
};

module.exports = CheckoutResolver;