const express = require('express');
const router = express.Router();
const pool = require('./../db/connection');

const getAllMainCategories = async (req, res, next) => {
  const connection = await pool.getConnection();
  const result = await connection.query('SELECT * FROM main_category');
  connection.release();
  res.status(200).json(result[0]);
};

router.get('/mainCategory', getAllMainCategories);

router.get('/subCategory', getAllMainCategories);

router.get('/book', getAllMainCategories)

router.get('/review', getAllMainCategories)

router.get('/quote', getAllMainCategories)

module.exports = router;