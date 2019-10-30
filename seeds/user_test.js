
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user_test').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_test').insert([

      ]);
    });
};
