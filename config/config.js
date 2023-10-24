const fs = require('fs')
const path = require("path")

module.exports = {
    development: {
      username: 'admin',
      password: 'root',
      database: 'admin',
      host: 'localhost',
      dialect: 'postgres',
    },
    production: {
      username: 'admin',
      password: 'root',
      database: 'admin',
      host: 'localhost',
      dialect: 'postgres',
      // username: 'doadmin',
      // password: 'AVNS_bbfZ8qfBwsBy5jrO0Lb',
      // database: 'defaultdb',
      // host: 'db-postgresql-sgp1-45559-do-user-14506858-0.b.db.ondigitalocean.com',
      // dialect: 'postgres',
      // port: 25060,
      // dialectOptions: {
      //   ssl: {
      //     ca: fs.readFileSync(path.resolve("config", "ca-certificate.crt")),
      //   },    
      // }             
  },
};
  