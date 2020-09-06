require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const pool = require('./db/connection');
const cors = require('cors');
const { urlencoded, json } = require('express');

const app = express();
app.use(cors());

app.use(urlencoded({ extended: true }), json());

const getAllMainCategories = async (req, res, next) => {
  const connection = await pool.getConnection();
  const result = await connection.query('SELECT * FROM main_category');
  connection.release();
  res.status(200).json(result[0]);
};

app.use(logger('dev'));

app.get('/', getAllMainCategories);

app.listen(3000, () => {
  console.log(`server is listening on port ${3000}`);
});
