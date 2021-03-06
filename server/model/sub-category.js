const pool = require('../db/connection');

exports.getAll = async () => {
  const connection = await pool.getConnection();
  const result = await connection.query('SELECT * FROM sub_category');
  connection.release();
  return result;
};

exports.getByMainCategoryId = async (mainCategoryId) => {
  const connection = await pool.getConnection();
  const result = await connection.query(`SELECT * FROM sub_category WHERE main_category_id=${mainCategoryId}`);
  connection.release();
  return result;
};
