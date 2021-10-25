const {Model} = require("objection");
const tableNames = require("../../constants/tableNames")

class List extends Model {
  static get tableName() {
    return tableNames.list;
  }
}

module.exports = List;