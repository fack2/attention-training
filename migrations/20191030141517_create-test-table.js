
exports.up = function (knex, Promise) {
  return knex.schema.createTable('test', function (table) {
    table.increments();
    table.string('description').notNullable();
    table.integer('question_id').references('id').inTable('question')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('test');
}