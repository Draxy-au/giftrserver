const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const middlewares = require('./middlewares');
const api = require('./api');
const project = require('./constants/project');
const fileUpload = require('express-fileupload');

const app = express();

const corsOptions = {
  origin: [process.env.SERVER],
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true
};

app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.get('/', (req, res) => {
  res.json({
    message: project.PROJECT_NAME,
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;