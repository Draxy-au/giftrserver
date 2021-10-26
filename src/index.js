const app = require('./app');
const db = require('./db');
const logger = require('./lib/logger');


if (!db.connection) {
  return console.log("No connection with database possible. Exiting...");
}

const port = process.env.PORT || 5431;

app.listen(port, () => logger.info(`Listening at http://localhost:${port}`));