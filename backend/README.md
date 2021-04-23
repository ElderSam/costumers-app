# Backend - Project Build with TypeORM, Node.js, Typescript, PostgreSQL & Express

------------------
## Steps to run this project: 🚀

### 1️⃣ Install dependencies
Run `npm i` command

### 2️⃣ Setup database settings inside `ormconfig.json` file
Create a database in Postgres and udpate the <code>`ormconfig.ts`</code> file if necessary

### 3️⃣ Start the Server
 Run `npm dev` command

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

how I started this project;
``$ typeorm init --name MyProject --database postgres --express``

https://typeorm.io/#/select-query-builder/how-to-create-and-use-a-querybuilder
Migrations: https://wanago.io/2019/01/28/typeorm-migrations-postgres/

how to create migrations:
``$ yarn typeorm migration:create -n <MIGRATION_NAME>`` //example of migration name: CreateUsersTable

Run Migrations:
`$ yarn typeorm migration:run`

------------------------------------------
### reflect-metadata
allow some annotations features used with TypeORM
