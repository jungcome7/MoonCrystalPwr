require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const mysql = require('mysql2/promise');
const cors = require('cors');
const { urlencoded, json } = require('express');

const app = express();
app.use(cors())

app.use(urlencoded({ extended: true }), json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  connectionLimit: 20,
  waitForConnections: false,
});

// const setHeader = function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, PATCH");
//   next();
// };

// app.use(setHeader);

const getAllMainCategories = async (req, res, next) => {
  const connection = await pool.getConnection();
  const result = await connection.query('SELECT * FROM main_category');
  connection.release();
  res.status(200).json(result[0]);
};


app.use(logger('dev'));

// const corsOptions = {
//   origin: 'http://localhost:9000', // 허락하고자 하는 요청 주소
//   credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
// };
// app.use(cors(corsOptions));

app.get('/', getAllMainCategories);

app.listen(3000, () => {
  console.log(`server is listening on port ${3000}`);
});
