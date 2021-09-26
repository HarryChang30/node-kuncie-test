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

* `application` Business Login and Use Cases needed in Application <br />
* `repository` Model and Database Interaction CRUD on Repository <br />
* `infrastructure` The Lowest layer and most of integration with infrastructure related <br />
* `interfaces` Controller/Interfaces for REST or GraphQL <br />
* `test` Test File <br />

The goal idea of this implementation: <br /><br />
![alt text](https://github.com/HarryChang30/node-kuncie-test/blob/master/implementation.jpg)


TO-DO: 
1. Adding Data Validation in Domain folder (Mostly it is called DTO)

