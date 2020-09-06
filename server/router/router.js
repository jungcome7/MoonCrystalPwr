const express = require('express');
const router = express.Router();
const pool = require('./../db/connection');

const getAllMainCategories = async (req, res, next) => {
  const connection = await pool.getConnection();
  const result = await connection.query('SELECT * FROM main_category');
  connection.release();
  res.status(200).json(result[0]);
};

router.get('/category', getAllMainCategories);

module.exports = router;