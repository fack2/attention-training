const path = require('path')
require('env2')(path.join('.env'))

module.exports = {
  client: 'pg',
  connection: process.env.DB,
  debug: process.env.NODE_ENV === 'development',
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: __dirname + `/seeds`
  }
}