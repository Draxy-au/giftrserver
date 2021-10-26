const { Model } = require("objection");
const tableNames = require("../../constants/tableNames");
const listSchema = require("./list.schema.json");

class List extends Model {
  static get tableName() {
    return tableNames.list;
  }

  static get jsonSchema() {
    return listSchema;
  }

  static get relationMappings() {
    const User = require("../user/user.model");
    return {
      user: {
        relation: Model.HasOneRelation,
        modelClass: User,
        join: {
          from: "list.user_id",
          to: "user.id",
        },
      },
    };
  }
}

module.exports = List;
