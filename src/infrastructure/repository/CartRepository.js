const db = require('../models/db');

const CartRepository = {
  findAll: (user_id) => {
    return db.carts.findAll({
      where: { user_id }
    });
  },

  create: (cart) => {
    return db.carts.create(cart);
  }
};

module.exports = CartRepository;