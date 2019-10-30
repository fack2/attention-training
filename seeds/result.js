
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('result').del()
    .then(function () {
      // Inserts seed entries
      return knex('result').insert([

      ]);
    });
};
