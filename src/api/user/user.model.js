const { Model } = require("objection");
const tableNames = require("../../constants/tableNames");
const userSchema = require("./user.schema.json");

class User extends Model {
  static get tableName() {
    return tableNames.user;
  }

  static get jsonSchema() {
    return userSchema;
  }

  static get relationMappings() {
    const ListModel = require("../list/list.model");
    const ListitemModel = require("../listitem/listitem.model");

    return {
      subscriptions: {
        relation: Model.ManyToManyRelation,
        modelClass: ListModel,
        join: {
          from: "user.id",
          through: {
            from: "subscribe.user_id",
            to: "subscribe.list_id",
          },
          to: "list.id",
        },
      },
      purchases: {
        relation: Model.ManyToManyRelation,
        modelClass: ListitemModel,
        join: {
          from: "user.id",
          through: {
            from: "purchase.user_id",
            to: "purchase.listitem_id",
          },
          to: "listitem.id",
        },
      },
    };
  }
}

module.exports = User;
