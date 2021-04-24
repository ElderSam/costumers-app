require("dotenv").config({
	path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})


let TEST_ENV = {};

if(process.env.NODE_ENV === "test") {
   TEST_ENV = { // properties to Test Enviroment
      "dropSchema": true, // So, let the dropSchema: true because this will delete your data after the tests.
      //"logging": false,
      //"synchronize": true,
      //"migrationsRun": true, // migrationsRun: true to automatically run migrations before the tests.
   }
}

module.exports = {
   "type": "postgres",
   "host": "localhost", //process.env.DB_HOST,
   "port": 5432, //process.env.DB_PORT,
   "username": "postgres", //process.env.DB_USER,
   "password": "admin", //process.env.DB_PASS,
   "database": process.env.DB_NAME,

   "synchronize": true,
   ...TEST_ENV,

   "entities": [
      "src/app/models/*.ts"
   ],
   "migrations": [
      "src/database/migrations/*.ts"
   ],
   "subscribers": [
      "src/app/subscribers/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/app/models",
      "migrationsDir": "src/database/migrations",
      "subscribersDir": "src/app/subscribers"
   }
}