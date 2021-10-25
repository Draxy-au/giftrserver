const {Model} = require("objection");
const tableNames = require("../../constants/tableNames")

class Listitem extends Model {
  static get tableName() {
    return tableNames.listitem;
  }
}

module.exports = Listitem;