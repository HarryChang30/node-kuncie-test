const db = require('../models/db');

const CartRepository = {
  findAll: (id) => {
    return db.carts.findAll({
      where: { user_id: id }
    });
  }
};

module.exports = CartRepository;