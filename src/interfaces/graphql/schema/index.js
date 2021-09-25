const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

//Types
const UserType = require('../schema/User/user-type');

//Resolvers
const UserResolver = require('../schema/User/user-resolver');

let registerTypes = [
  UserType
];
let registerResolvers = [
  UserResolver
];

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(...registerTypes),
  resolvers: mergeResolvers(...registerResolvers)
});

module.exports = schema;