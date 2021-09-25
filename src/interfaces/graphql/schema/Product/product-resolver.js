// TODO: Change this into the repository
const db = require('../../../../infrastructure/models/db');

const ProductResolver = {
  Query: {
    product: (parent, args) => {
      return db.products.findByPk(args.id);
    }
  },
  Mutation: {
    addProduct: (parent, args) => {
      return db.products.create({
        product_name: args.product_name,
        price: args.price,
        sku_code: args.sku_code
      });
    }
  }
};

module.exports = ProductResolver;