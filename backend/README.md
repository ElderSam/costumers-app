# Backend - Project Build with TypeORM, Node.js, Typescript, PostgreSQL & Express

------------------
## Steps to run this project: 🚀

### 1️⃣ Install dependencies
Run `npm i` command

### 2️⃣ Setup database settings inside `ormconfig.json` file
Create a database in Postgres and udpate the <code>`ormconfig.ts`</code> file if necessary

### 3️⃣ Start the Server
 Run `npm dev` command

----------------------
## Run Tests
$ yarn test
----------------

## 🚚 API Rotes
host: <code>http://localhost:3333</code>

You can use the Insomnia to see the routes.
Open Insomnia, and import the file in `/api_documentation` folder

Costumers;
*``Create /costumers (POST)``*

*``List All: /costumers (GET)``*

*``List By Id: /costumers/:id (GET)``*

*``Update: /costumers/:id (PUT)``*

*``Delete: /costumers/:id (DELETE)``*
---------------------------------
## 📚 Tools and Libraries used:
### body-parser
Parses the client's request from JSON into Javascript objects

### ts-node
Automatically restarts the server when we change any file

### PostgreSQL
Relational Database Manager
Download PostgreSQL: https://www.postgresql.org/download/
To start the server manually when has Connection Error: 
    In Windows, press win + R and open services.msc
    find postgreSQL service and click right buttom and start

### pgAdmin
Open Source administration and development platform for PostgreSQL.
https://www.pgadmin.org/

------------------------------------------
### TypeORM
To manipulate database
Documentation: https://typeorm.io/#/

how to started a new project:
https://typeorm.io/#/readme/step-by-step-guide

NOTE: the option ``"synchronize": true`` inside the file ``ormconfig.json``, allows the automatic creation of tables when they do not exist, without the need to create migrations manually

https://typeorm.io/#/select-query-builder/how-to-create-and-use-a-querybuilder
Migrations: https://wanago.io/2019/01/28/typeorm-migrations-postgres/

how to create migrations:
``$ yarn typeorm migration:create -n <MIGRATION_NAME>`` //example of migration name: CreateUsersTable

Run Migrations:
`$ yarn typeorm migration:run`

--------------------
### reflect-metadata
allow some annotations features used with TypeORM

### Jest
Jest is a JavaScript testing framework
Docs: https://jestjs.io/docs/en/getting-started.html

1. Install Jest:
``$ yarn add jest -D``

2. create config files:
``$ yarn jest --init``

3. Set the ``jest.config.js`` file;

	bail: true,
    ...
	testMatch: [
		"**/__tests__/**/*.test.ts?(x)"
	],
--------
------------------------------------------
## Useful links:
Configure to Typescript & TypeORM: https://dev.to/caiulucas/tests-with-jest-and-typeorm-4j1l
OR Configure to Typescript: https://sharklabs.com.br/testes-unitarios-com-nodejs-jest-typescript/

😉 Emojis: https://emojipedia.org/check-mark/
