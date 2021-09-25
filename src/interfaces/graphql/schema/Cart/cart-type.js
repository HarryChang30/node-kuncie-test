const gql = require('graphql-tag');

const CartType = gql`
    scalar JSON

    type CartType{
        user_id: Int
        items: JSON
        actual_prices: Float
        discount: Float
        final_prices: Float
    }

    type Query{
        cart(user_id:Int):[CartType]
        cartAccumulatedPrice(items:[String]):Float
        discountPrice(items:[String]):Float
        finalPrice(items:[String]):Float
    }
`;

module.exports = CartType;