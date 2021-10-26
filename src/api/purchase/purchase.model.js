const { Model } = require("objection");
const tableNames = require("../../constants/tableNames");
const purchaseSchema = require("./purchase.schema.json");

class Purchase extends Model {
  static get tableName() {
    return tableNames.purchase;
  }

  static get jsonSchema() {
    return purchaseSchema;
  }
}

module.exports = Purchase;
