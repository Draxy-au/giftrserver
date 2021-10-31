const { Model } = require("objection");
const tableNames = require("../../constants/tableNames");
const listitemSchema = require("./listitem.schema.json");

class Listitem extends Model {
  static get tableName() {
    return tableNames.listitem;
  }

  static get jsonSchema() {
    return listitemSchema;
  }

  static get relationMappings() {
    const ListModel = require("../list/list.model");
    return {
      list: {
        relation: Model.HasOneRelation,
        modelClass: ListModel,
        join: {
          from: tableNames.listitem.list_id,
          to: tableNames.list.id,
        },
      },
    };
  }
}

module.exports = Listitem;
