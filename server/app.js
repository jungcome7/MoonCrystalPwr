require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const router = require('./router/router');
const cors = require('cors');
const { urlencoded, json } = require('express');

const app = express();
const SERVER_PORT = 3000;

app.use(logger('dev'));
app.use(cors());
app.use(urlencoded({ extended: true }), json());

app.use('/api', router);

app.listen(SERVER_PORT, () => {
  console.log(`server is listening on port ${SERVER_PORT}`);
});
