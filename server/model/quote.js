const pool = require('../db/connection');

exports.getAll = async () => {
  const connection = await pool.getConnection();
  const result = await connection.query('SELECT * FROM quote');
  connection.release();
  return result;
};

exports.getByMainCategoryId = async (mainCategoryId) => {
  const connection = await pool.getConnection();
  const result = await connection.query(`SELECT * FROM quote WHERE main_category_id=${mainCategoryId}`);
  connection.release();
  return result;
};
