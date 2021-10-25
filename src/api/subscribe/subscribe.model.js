const {Model} = require("objection");
const tableNames = require("../../constants/tableNames")
const subscribeSchema = require('./subscribe.schema.json');

class Subscribe extends Model {
  static get tableName() {
    return tableNames.subscribe;
  }
  static get jsonSchema() {
    return subscribeSchema;
  }
}

module.exports = Subscribe;