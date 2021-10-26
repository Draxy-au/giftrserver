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
    const CategoryModel = require("../category/category.model");
    return {
      list: {
        relation: Model.HasOneRelation,
        modelClass: ListModel,
        join: {
          from: tableNames.listitem.list_id,
          to: tableNames.list.id,
        },
      },
      category: {
        relation: Model.HasOneRelation,
        modelClass: CategoryModel,
        join: {
          from: tableNames.listitem.category_id,
          to: tableNames.category.id,
        },
      },
    };
  }
}

module.exports = Listitem;
