// Update with your config settings.
const {knexSnakeCaseMappers} = require("objection");

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'GIFTr',
      user:     'draxy',
      password: "test",
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds : {
      directory: "./seeds",
    },
    ...knexSnakeCaseMappers,
  }
};
