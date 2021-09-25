# NodeJS Kuncie Backend Engineering Test

Take home backend assessment test

## Pre-requisites
1. Node >= v10.15.0 (recommend using the Node LTS version) 
2. Express
3. GraphQL
4. MySQL

## Installation
1. `npm install`

## Running on Local Development
1. `npm run dev`

## Server
1. REST API Server `http://127.0.0.1:3000`
2. GraphQL Server `http://127.0.0.1:3000/graphql`


## Run Test
1. `npm run test`

## Migration
1. Generating the migration file `npx sequelize-cli migration:generate --name=<migration>`
2. Running the migration file `npm run migrate`
3. Undo all the migration file `npm run migrate:undo`

## Seeders
1. Generating the seeder file `npx sequelize-cli seed:generate --name=<seed>`
2. Running the seeder file `npm run seed`
3. Undo all the seeder file `npm run seed:undo`


## Documentations
For Engineering Design Docs, please refer to this 
[Documentation](https://github.com/HarryChang30/node-kuncie-test/blob/master/PROJECT.md)