const gql = require('graphql-tag');

const CheckoutType = gql`
    type CheckoutType{
        is_checkout: Boolean
    }

    type Mutation{
        confirmation(checkout_id:Int!):CheckoutType
    }
`;

module.exports = CheckoutType;