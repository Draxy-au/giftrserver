
exports.seed = async function(knex) {
  // truncate all existing tables
  await knex.raw('TRUNCATE TABLE "login" CASCADE');
  await knex.raw('TRUNCATE TABLE "users" CASCADE');
  await knex.raw('TRUNCATE TABLE "lists" CASCADE');
  await knex.raw('TRUNCATE TABLE "categories" CASCADE');
  await knex.raw('TRUNCATE TABLE "listitems" CASCADE');
  await knex.raw('TRUNCATE TABLE "subscribed" CASCADE');
  await knex.raw('TRUNCATE TABLE "purchased" CASCADE');

  await knex('login').insert([
    {
      id: 1,
      email: "draxy80@gmail.com",
      
    }
  ])
};
