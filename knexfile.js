require("dotenv").config();
const { knexSnakeCaseMappers } = require("objection");

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './db/migrations',
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
    ...knexSnakeCaseMappers,
  },
};
