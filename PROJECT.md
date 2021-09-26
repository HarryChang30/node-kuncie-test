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

`application` Resides all business logic and each use case needed in the services <br />
`repository` Resides all of the Database Interaction such as CRUD operation should be inside the repository <br />
`infrastructure` Resides the lowest layer where this folder put most of the integration such as Database,Model, Repository, MessageQueue, HTTP Call, etc. <br />
`interfaces` Resides all the controller REST API or GraphQL interfaces API (Schema - Type and Resolver) <br />
`test` Resides all test file <br />

The goal idea of this implementation: <br />
![alt text](https://github.com/HarryChang30/node-kuncie-test/blob/master/implementation.jpg)


TO-DO: 
1. Adding Data Validation in Domain folder (Mostly it is called DTO)

