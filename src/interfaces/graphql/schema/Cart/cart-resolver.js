// TODO: Change this into the repository
const db = require('../../../../infrastructure/models/db');

const CartResolver = {
  Query: {
    cart: (parent, args) => {
      return db.carts.findAll({
        where: {
          user_id: args.user_id
        }
      });
    }
  },
  Mutation: {
  }
};

module.exports = CartResolver;