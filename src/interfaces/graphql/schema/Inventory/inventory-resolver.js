const CreateInventory = require('../../../../application/Inventory/CreateInventory');
const GetInventory = require('../../../../application/Inventory/GetInventory');
const UpdateInventory = require('../../../../application/Inventory/UpdateInventory');

const InventoryResolver = {
  Query: {
    inventory: (parent, args) => {
      return GetInventory.ByProductId(args.product_id);
    },
    showInventory: () => {
      return GetInventory.ShowAll();
    }
  },
  Mutation: {
    addInventory: (parent, args) => {
      const inventory = {
        product_id: args.product_id,
        qty: args.qty
      };
      return CreateInventory.create(inventory);
    },

    updateQuantity: (parent, args) => {
      return UpdateInventory.updateQuantity(args.product_id, args.qty);
    }
  }
};

module.exports = InventoryResolver;