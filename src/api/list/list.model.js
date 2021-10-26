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
    const ListItem = require("../listitem/listitem.model");
    return {
      user: {
        relation: Model.HasOneRelation,
        modelClass: User,
        filter: query => query.select('id', 'email', 'first_name', 'first_name'),
        join: {
          from: "list.user_id",
          to: "user.id",
        },
      },
      items: {
        relation: Model.HasManyRelation,
        modelClass: ListItem,
        join: {
          from: "list.id",
          to: "listitem.list_id",
        },
      },
    };
  }
}

module.exports = List;
