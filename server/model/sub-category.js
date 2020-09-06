const pool = require('../db/connection');

exports.getAll = async () => {
    const connection = await pool.getConnection();
    const result = await connection.query('SELECT * FROM sub_category');
    connection.release();
    return result;
  };