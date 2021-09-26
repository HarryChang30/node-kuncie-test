const db = require('../models/db');
const Cart = require('../../domain/Cart');

const CartRepository = {
  findByPk: (cart_id) => {
    return db.carts.findByPk(cart_id);
  },

  findAll: (user_id) => {
    return db.carts.findAll({
      where: { user_id }
    });
  },

  create: (data) => {
    const { errors } = new Cart(data).validate();

    if (errors) {
      throw new Error('ValidationError');
    }

    return db.carts.create(data);
  },

  update_confirmation_checkout: (cart_id) => {
    return db.carts.update({ is_checkout: true }, { where: { id: cart_id }});
  }
};

module.exports = CartRepository;