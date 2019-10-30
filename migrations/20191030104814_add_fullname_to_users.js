
exports.up = function (knex, Promise) {
  knex.schema.table('users', function (table) {
    table.integer('fullname').notNull()
  })
}

exports.down = function (knex, Promise) {
  knex.schema.table('users', function (table) {
    table.dropColumn('fullname')
  })
}