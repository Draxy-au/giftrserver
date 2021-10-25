const {Model} = require("objection");
const tableNames = require("../../constants/tableNames");
const categorySchema = require('./category.schema.json');

class Category extends Model {
  static get tableName() {
    return tableNames.category;
  }
  static get jsonSchema() {
    return categorySchema;
  }
}

module.exports = Category;