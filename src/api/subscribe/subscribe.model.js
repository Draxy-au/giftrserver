const {Model} = require("objection");
const tableNames = require("../../constants/tableNames")

class Subscribe extends Model {
  static get tableName() {
    return tableNames.subscribe;
  }
}

module.exports = Subscribe;