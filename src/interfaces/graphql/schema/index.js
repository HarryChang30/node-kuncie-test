const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

//Types
const UserType = require('../schema/User/user-type');
const ProductType = require('../schema/Product/product-type');
const InventoryType = require('../schema/Inventory/inventory-type');
const CartType = require('../schema/Cart/cart-type');
const CheckoutType = require('../schema/Checkout/checkout-type');

//Resolvers
const UserResolver = require('../schema/User/user-resolver');
const ProductResolver = require('../schema/Product/product-resolver');
const InventoryResolver = require('../schema/Inventory/inventory-resolver');
const CartResolver = require('../schema/Cart/cart-resolver');
const CheckoutResolver = require('../schema/Checkout/checkout-resolver');

let registerTypes = [
  UserType,
  ProductType,
  InventoryType,
  CartType,
  CheckoutType
];
let registerResolvers = [
  UserResolver,
  ProductResolver,
  InventoryResolver,
  CartResolver,
  CheckoutResolver
];

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(registerTypes),
  resolvers: mergeResolvers(registerResolvers)
});

module.exports = schema;