const db = require("../../db");
const tableNames = require("../../constants/tableNames");

const fields = ["id", "email_id", "first_name", "last_name"];

module.exports = {
  find() {
    return db(tableNames.user).select(fields);
  },
  get(id) {
    return db(tableNames.user).select(fields).where({
      id,
    }).first();
  },
};
