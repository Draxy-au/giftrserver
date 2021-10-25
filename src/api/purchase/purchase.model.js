const {Model} = require("objection");
const tableNames = require("../../constants/tableNames")

class Purchase extends Model {
  static get tableName() {
    return tableNames.purchase;
  }
}

module.exports = Purchase;