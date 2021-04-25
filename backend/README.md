# Backend - Project Build with TypeORM, Node.js, Typescript, PostgreSQL & Express

------------------
## Steps to run this project: 🚀

### 1️⃣ Install dependencies
Run `npm i` command

### 2️⃣ Setup database settings inside `ormconfig.json` file
Create a database in Postgres and udpate the <code>`ormconfig.ts`</code> file if necessary

## 3️⃣ Configure the Enviroment Variables;
Create `.env` and `.env.test` files in the root folder and set the DB_NAME, for example;
	DB_NAME=costumers_app

### 4️⃣ Start the Server
 Run `npm dev` command

----------------------
## Run Tests
$ yarn test

OBS: In ``package.json`` file the script for ``Windows``;
    ``"test": "SET NODE_ENV=test& jest"``

    If you are running in ``Linux/Mac``, you need to set;
    ``"test": "NODE_ENV=test jest"``

### To prevent PostgreSQL ERRORS, you must enter in PostgreSQL admin; 
1. To create a user with permissions, run the SQL;
<code>CREATE ROLE test WITH
        LOGIN
        SUPERUSER
        CREATEDB
        CREATEROLE
        INHERIT
        NOREPLICATION
        CONNECTION LIMIT -1
        PASSWORD 'xxxxxx';</code>

2. Create a Database;
<code>CREATE DATABASE "DB_test"
        WITH 
        OWNER = test
        ENCODING = 'UTF8'
        CONNECTION LIMIT = -1;</code>
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

2. Follow the tutorial:
Configure to Typescript: https://dev.to/caiulucas/tests-with-jest-and-typeorm-4j1l

3. create config files:
``$ npx ts-jest config:init``

--------------
### Supertest
Simulates the Express layer, so we can make a request for an API.
Tutorial: https://dev.to/vitordelfino/escrevendo-testes-com-jest-supertest-1ed

--------------------------------------------------
## Useful links:
😉 Emojis: https://emojipedia.org/check-mark/
