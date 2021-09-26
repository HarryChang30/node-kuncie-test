const db = require('../models/db');

const CartRepository = {
  findByPk: (cart_id) => {
    return db.carts.findByPk(cart_id);
  },

  findAll: (user_id) => {
    return db.carts.findAll({
      where: { user_id }
    });
  },

  create: (cart) => {
    return db.carts.create(cart);
  },

  update_confirmation_checkout: (cart_id) => {
    return db.carts.update({ is_checkout: true }, { where: { id: cart_id }});
  }
};

module.exports = CartRepository;