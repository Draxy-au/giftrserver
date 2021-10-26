const {Model} = require("objection");
const tableNames = require("../../constants/tableNames")
const listitemSchema = require('./listitem.schema.json');

class Listitem extends Model {
  static get tableName() {
    return tableNames.listitem;
  }

  static get jsonSchema() {
    return listitemSchema;
  }
}

module.exports = Listitem;