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
2. Any `POST/PUT/PATCH/DELETE` operation is categorised as `Mutation Type`

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

## Database Design

## TO-DO: 
1. Adding Data Validation in Domain folder
2. Dockerfile for Containerized

