# Engineering Design Documentation 

Structure of project pattern in `src folder`
```
├───application
│   ├───Cart
│   ├───Checkout
│   ├───Inventory
│   ├───Product
│   └───User
├───domain
├───infrastructure
│   ├───models
│   └───repository
└───interfaces
    └───graphql
        └───schema
            ├───Cart
            ├───Checkout
            ├───Inventory
            ├───Product
            └───User
```

* `application` Business Logic and Use Cases needed in Application <br />
* `repository` Model and Database Interaction CRUD on Repository <br />
* `infrastructure` The Lowest layer and most of integration with infrastructure related <br />
* `interfaces` Controller/Interfaces for REST or GraphQL <br />
* `test` Test File <br />

The goal idea of this implementation: <br /><br />
![alt text](https://github.com/HarryChang30/node-kuncie-test/blob/master/implementation.jpg)

## GraphQL Implementation
For implementation in GraphQL it is divided into two types where <br />
1. Fetch `GET` data functionality is categorised as `Query Type`
2. Any `POST` operation is categorised as `Mutation Type`

## GraphQL API Schema
1. Create User API `Mutation.addUser` <br />

Query <br />
```
mutation addUser($name:String!, $phone_number:String!) {
    addUser(name:$name, phone_number:$phone_number) {
        id
        name
        phone_number
    }
}
```

GraphQL Variables <br />
```
{
    "name": "Bobby",
    "phone_number": "+62899019192012"
}
```

2. Get User `Query.user` <br />

Query <br />
```
query user($id:ID!) {
    user(id:$id) {
        name
        phone_number
    }
}
```

GraphQL Variables <br />
```
{
    "id": 1
}
```

3. Get All Inventory `Query.showInventory` <br />

Query <br />
```
query showInventory {
  showInventory {
    product_id
    product_name
    product_price
    product_sku_code
    qty
  }
}
```

GraphQL Variables <br />
```
{}
```

4. Get Final Price `Query.finalPrice` <br />

Query <br />
```
query finalPrice($items:[String]) {
  finalPrice(items:$items) {
    actual_prices
    discount
    final_prices
  }
}
```

GraphQL Variables <br />
```
{
  "items":[
    "Macbook Pro",
    "Raspberry Pi B"
  ]
}
```

5. Add Cart `Mutation.addCart` <br />

Query <br />
```
query finalPrice($items:[String]) {
  finalPrice(items:$items) {
    actual_prices
    discount
    final_prices
  }
}
```

GraphQL Variables <br />
```
{
  "items":[
    "Macbook Pro",
    "Raspberry Pi B"
  ]
}
```

6. Checkout Confirmation `Mutation.confirmation` <br />

Query <br />
```
mutation confirmation($cart_id:Int!) {
    confirmation(cart_id:$cart_id) {
        is_checkout
    }
}
```

GraphQL Variables <br />
```
{
    "cart_id": 8
}
```

7. Get Product By Id `Query.product` <br />

Query <br />
```
query product($id:ID) {
    product(id: $id) {
        id
        product_name
        price
        sku_code
    }
}
```

GraphQL Variables <br />
```
{
    "id": 2
}
```

8. Add Product `Mutation.addProduct` <br />

Query <br />
```
mutation addProduct($product_name:String!, $price:Float!, $sku_code:String!) {
  addProduct(product_name:$product_name, price:$price, sku_code:$sku_code) {
    id
    product_name
    price
    sku_code
  }
}
```

GraphQL Variables <br />
```
{
  "product_name": "Lenovo 15",
  "price":4999.99,
  "sku_code": "POS90XD"
}
```

9. Add Inventory `Mutation.addInventory` <br />

Query <br />
```
mutation addInventory($product_id:Int!, $qty:Int!) {
  addInventory(product_id:$product_id, qty:$qty) {
    product_id,
    qty
  }
}
```

GraphQL Variables <br />
```
{
  "product_id": 5,
  "qty": 10
}
```

10. Update Quantity Inventory `Mutation.updateQuantity` <br />

Query <br />
```
mutation updateQuantity($product_id:Int!, $qty:Int!) {
  updateQuantity(product_id:$product_id, qty:$qty)
}
```

GraphQL Variables <br />
```
{
  "product_id": 5,
  "qty": 10
}
```

Postman Collection: `https://www.getpostman.com/collections/5cd66eee68c276cb14f8`