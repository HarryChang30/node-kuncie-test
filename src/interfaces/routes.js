const express = require('express');
const router = express.Router();

const { graphqlHTTP } = require('express-graphql');


const schema = require('../interfaces/graphql/schema');

// GraphQL Server
router.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

//Health check
router.get('/', (req, res) => res.status(200).json({msg: 'Server is healthy'}));

module.exports = router;