
exports.up = function (knex, Promise) {
  return knex.schema.createTable('result', function (table) {
    table.increments();
    table.string('description').notNullable();
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('result');
}
