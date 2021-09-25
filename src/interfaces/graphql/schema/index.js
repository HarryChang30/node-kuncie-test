const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

//Types
const UserType = require('../schema/User/user-type');
const ProductType = require('../schema/Product/product-type');

//Resolvers
const UserResolver = require('../schema/User/user-resolver');
const ProductResolver = require('../schema/Product/product-resolver');

let registerTypes = [
  UserType,
  ProductType
];
let registerResolvers = [
  UserResolver,
  ProductResolver
];

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(registerTypes),
  resolvers: mergeResolvers(registerResolvers)
});

module.exports = schema;