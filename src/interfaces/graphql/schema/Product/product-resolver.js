const CreateProduct = require('../../../../application/Product/CreateProduct');
const GetProduct = require('../../../../application/Product/GetProduct');

const ProductResolver = {
  Query: {
    product: (parent, args) => {
      return GetProduct.ById(args.id);
    }
  },
  Mutation: {
    addProduct: (parent, args) => {
      const product = {
        product_name: args.product_name,
        price: args.price,
        sku_code: args.sku_code
      };

      return CreateProduct.create(product);
    }
  }
};

module.exports = ProductResolver;