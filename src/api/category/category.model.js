const {Model} = require("objection");
const tableNames = require("../../constants/tableNames")

class Category extends Model {
  static get tableName() {
    return tableNames.category;
  }
}

module.exports = Category;