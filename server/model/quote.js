const pool = require('../db/connection');

exports.getByBookId = async (bookId) => {
  const connection = await pool.getConnection();
  const result = await connection.query(`SELECT * FROM quote WHERE book_id=${bookId}`);
  connection.release();
  return result;
};
