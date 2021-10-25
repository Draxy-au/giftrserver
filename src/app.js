const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const middlewares = require('./middlewares');
const api = require('./api');
const project = require('./constants/project');

const app = express();

app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: project.PROJECT_NAME,
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;

/*

  / --> GET --> res server running
  /lists/:userid --> GET --> res lists for userid
  /sharedlists/userid --> GET --> res lists shared to userid
  /signin --> POST --> res user
  /register --> POST --> res user
  /createlist --> POST --> res list
  /updatepassword/:userid --> POST --> res user 
  /createlistitem/:listid/ --> POST --> res list item
  /updatelist/:listid --> PUT --> res list
  /updatelistitem/:listid/:listitemid --> PUT --> res list item
  /updateuser/:userid --> PUT --> res user

 */
