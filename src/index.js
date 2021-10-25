const app = require('./app');
const db = require('./db');

if (!db.connection) {
  return console.log("No connection with database possible. Exiting...");
}

const port = 3001;

app.listen(port, () => console.log(`Express is listening on port: ${port}!`));