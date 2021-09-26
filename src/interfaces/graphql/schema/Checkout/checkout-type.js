const gql = require('graphql-tag');

const CheckoutType = gql`
    type CheckoutType{
        is_checkout: Boolean
    }

    type Mutation{
        confirmation(cart_id:Int!):CheckoutType
    }
`;

module.exports = CheckoutType;