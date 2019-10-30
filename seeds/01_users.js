
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          email: 'sahar.adem95@email.com',
          password: 'dorwssap',
          name: 'Sahar Adem'
        },
        {
          id: 2,
          email: 'nadeenShaheen@email.com',
          password: 'password1',
          name: 'Sahar Adem'
        },
        {
          id: 3,
          email: 'hsfjshdsfjs@email.com',
          password: 'password123',
          name: 'Sahar Adem'
        }
      ]);
    });
};