const { Model } = require("objection");
const tableNames = require("../../constants/tableNames");
const listSchema = require('./list.schema.json');

class List extends Model {
  static get tableName() {
    return tableNames.list;
  }

  static get jsonSchema() {
    return listSchema;
  }
}

module.exports = List;
