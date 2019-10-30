
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('option').del()
    .then(function () {
      // Inserts seed entries
      return knex('option').insert([
        { id: 1, description: 'Never' },
        { id: 2, description: 'Rarely' },
        { id: 3, description: 'Sometimes' },
        { id: 4, description: 'Often' },
      ]);
    });
};
