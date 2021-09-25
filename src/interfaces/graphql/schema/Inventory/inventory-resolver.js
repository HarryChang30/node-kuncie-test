// TODO: Change this into the repository
const db = require('../../../../infrastructure/models/db');

const InventoryResolver = {
  Query: {
    inventory: (parent, args) => {
      return db.inventories.findByPk(args.id);
    }
  },
  Mutation: {
    addInventory: (parent, args) => {
      return db.inventories.create({
        product_id: args.product_id,
        qty: args.qty
      });
    },

    updateQuantity: (parent, args) => {
      return db.inventories.update({
        qty: args.qty
      }, {
        where: { product_id: args.product_id }
      });
    }
  }
};

module.exports = InventoryResolver;