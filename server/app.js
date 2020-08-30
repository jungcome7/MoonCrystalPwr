require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  connectionLimit: 20,
  waitForConnections: false,
});

const getAllUser = async (req, res, next) => {
  const connection = await pool.getConnection();
  const result = await connection.query('SELECT * FROM user');
  connection.release();
  res.status(200).json(result[0]);
} 

const app = express();

app.use(logger('dev'));

app.get('/', getAllUser);

app.listen(3000, () => {
  console.log(`server is listening on port ${3000}`);
});
