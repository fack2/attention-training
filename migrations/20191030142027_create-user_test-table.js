
exports.up = function (knex, Promise) {
  return knex.schema.createTable('user_test', function (table) {
    table.increments();
    table.integer('result_id').references('id').inTable('result')
    table.integer('user_id').references('id').inTable('users')
    table.integer('test_id').references('id').inTable('test')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('user_test');
}