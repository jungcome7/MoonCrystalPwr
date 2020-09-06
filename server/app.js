require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const router = require('./router/router');
const cors = require('cors');

const { urlencoded, json } = require('express');

const app = express();
app.use(cors());

app.use(urlencoded({ extended: true }), json());

app.use(logger('dev'));

app.use('/api', router);

app.listen(3000, () => {
  console.log(`server is listening on port ${3000}`);
});
