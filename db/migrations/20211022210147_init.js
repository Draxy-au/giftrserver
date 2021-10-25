exports.up = function (knex) {
  return knex.schema
    .createTable("user", (table) => {
      table.increments();
      table.string("email").notNullable().unique();
      table.string("password").notNullable();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.timestamps(true, true);
    })
    .createTable("list", (table) => {
      table.increments();
      table.integer("user_id").references("id").inTable("user").notNullable();
      table.string("name").notNullable();
      table.string("type").notNullable();
      table.date("created").notNullable();
      table.date("closing").notNullable();
      table.timestamps(true, true);
    })
    .createTable("category", (table) => {
      table.increments();
      table.string("name").notNullable();
    })
    .createTable("listitem", (table) => {
      table.increments();
      table.integer("list_id").references("id").inTable("list").notNullable();
      table.string("name").notNullable();
      table.integer("category_id").references("id").inTable("category");
      table.decimal("price", 14, 2).notNullable();
      table.text("url");
      table.text("description");
      table.string("image_path");
      table.string("status");
      table.timestamps(true, true);
    })
    .createTable("subscribe", (table) => {
      table.increments();
      table.integer("user_id").references("id").inTable("user").notNullable();
      table.integer("list_id").references("id").inTable("list").notNullable();
    })
    .createTable("purchase", (table) => {
      table.increments();
      table.integer("user_id").references("id").inTable("user").notNullable();
      table
        .integer("list_item_id")
        .references("id")
        .inTable("listitem")
        .notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("purchase")
    .dropTableIfExists("subscribe")
    .dropTableIfExists("listitem")
    .dropTableIfExists("category")
    .dropTableIfExists("list")
    .dropTableIfExists("user")
 };
