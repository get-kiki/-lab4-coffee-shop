const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,

  db: {
    database: 'coffeeshop-db',
    user: 'root',
    password: 'root',
    options: {
      dialect: 'sqlite',
      storage: './coffeeshop-db.sqlite',
      logging: false
    }
  },

  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
