const tableNames = require("../../src/constants/tableNames");

require("../../src/constants/tableNames");

exports.up = async (knex) => {
  return knex.schema
    .createTable(tableNames.user, (table) => {
      table.increments();
      table.string("email").notNullable().unique();
      table.string("password").notNullable();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.timestamps(true, true);
    })
    .createTable(tableNames.list, (table) => {
      table.increments();
      table.integer("user_id").references("id").inTable("user").notNullable();
      table.string("name").notNullable();
      table.string("type").notNullable();
      table.string("description").notNullable();
      table.date("closing").notNullable();
      table.timestamps(true, true);
    })
    .createTable(tableNames.listitem, (table) => {
      table.increments();
      table.integer("list_id").references("id").inTable("list").notNullable();
      table.string("name").notNullable();
      table.decimal("price", 14, 2).notNullable();
      table.text("url");
      table.text("description");
      table.string("image_path");
      table.string("status");
      table.timestamps(true, true);
    })
    .createTable(tableNames.subscribe, (table) => {
      table.increments();
      table.integer("user_id").references("id").inTable("user").notNullable();
      table.integer("list_id").references("id").inTable("list").notNullable();
    })
    .createTable(tableNames.purchase, (table) => {
      table.increments();
      table.integer("user_id").references("id").inTable("user").notNullable();
      table
        .integer("listitem_id")
        .references("id")
        .inTable("listitem")
        .notNullable();
    });
};

exports.down = async (knex) => {
  return knex.schema
    .dropTableIfExists(tableNames.purchase)
    .dropTableIfExists(tableNames.subscribe)
    .dropTableIfExists(tableNames.listitem)
    .dropTableIfExists(tableNames.category)
    .dropTableIfExists(tableNames.list)
    .dropTableIfExists(tableNames.user);
};
