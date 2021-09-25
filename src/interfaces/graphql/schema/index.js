const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

//Types
const UserType = require('../schema/User/user-type');
const ProductType = require('../schema/Product/product-type');
const InventoryType = require('../schema/Inventory/inventory-type');
const CartType = require('../schema/Cart/cart-type');

//Resolvers
const UserResolver = require('../schema/User/user-resolver');
const ProductResolver = require('../schema/Product/product-resolver');
const InventoryResolver = require('../schema/Inventory/inventory-resolver');
const CartResolver = require('../schema/Cart/cart-resolver');

let registerTypes = [
  UserType,
  ProductType,
  InventoryType,
  CartType
];
let registerResolvers = [
  UserResolver,
  ProductResolver,
  InventoryResolver,
  CartResolver
];

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(registerTypes),
  resolvers: mergeResolvers(registerResolvers)
});

module.exports = schema;