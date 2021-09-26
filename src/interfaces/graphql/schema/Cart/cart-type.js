const gql = require('graphql-tag');

const CartType = gql`
    scalar JSON

    type CartType{
        id:ID
        user_id: Int
        items: JSON
        actual_prices: Float
        discount: Float
        final_prices: Float
        is_checkout: Boolean
    }

    type ResponseCart{
        actual_prices: Float
        discount: Float
        final_prices: Float
    }

    type Query{
        cart(user_id:Int):[CartType]
        cartAccumulatedPrice(items:[String]):Float
        discountPrice(items:[String]):Float
        finalPrice(items:[String]):ResponseCart
    }

    type Mutation{
        addCart(user_id:Int!, items:[String!], actual_prices:Float!, discount: Float!, final_prices: Float!):CartType
    }
`;

module.exports = CartType;