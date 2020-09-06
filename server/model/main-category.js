const pool = require('../db/connection');

exports.getAll = async () => {
  const connection = await pool.getConnection();
  const result = await connection.query('SELECT * FROM main_category');
  connection.release();
  return result;
};
