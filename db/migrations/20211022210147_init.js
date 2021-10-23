exports.up = function (knex) {
  return knex.schema
    .createTable("login", (table) => {
      table.increments();
      table.string("email").notNullable().unique();
      table.string("hash").notNullable();
    })
    .createTable("users", (table) => {
      table.increments();
      table.integer("email_id").references("id").inTable("login").notNullable();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.timestamps(true, true);
    })
    .createTable("lists", (table) => {
      table.increments();
      table.integer("user_id").references("id").inTable("users").notNullable();
      table.string("name").notNullable();
      table.string("type").notNullable();
      table.date("created").notNullable();
      table.date("closing").notNullable();
      table.timestamps(true, true);
    })
    .createTable("categories", (table) => {
      table.increments();
      table.string("name").notNullable();
    })
    .createTable("listitems", (table) => {
      table.increments();
      table.integer("list_id").references("id").inTable("lists").notNullable();
      table.string("name").notNullable();
      table.integer("category_id").references("id").inTable("categories");
      table.decimal("price", 14, 2).notNullable();
      table.text("url");
      table.text("description");
      table.string("image_path");
      table.string("status");
      table.timestamps(true, true);
    })
    .createTable("subscribed", (table) => {
      table.increments();
      table.integer("user_id").references("id").inTable("users").notNullable();
      table.integer("list_id").references("id").inTable("lists").notNullable();
    })
    .createTable("purchased", (table) => {
      table.increments();
      table.integer("user_id").references("id").inTable("users").notNullable();
      table
        .integer("list_item_id")
        .references("id")
        .inTable("listitems")
        .notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("purchased")
    .dropTableIfExists("subscribed")
    .dropTableIfExists("purchased")
    .dropTableIfExists("subscribed")
    .dropTableIfExists("listitems")
    .dropTableIfExists("categories")
    .dropTableIfExists("lists")
    .dropTableIfExists("users")
    .dropTableIfExists("login");
};
