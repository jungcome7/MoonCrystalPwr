const pool = require('../db/connection');

exports.getAll = async () => {
  const connection = await pool.getConnection();
  const result = await connection.query('SELECT * FROM book');
  connection.release();
  return result;
};

exports.getByMainCategoryId = async (mainCategoryId) => {
  const connection = await pool.getConnection();
  const result = await connection.query(`
  SELECT book.* FROM book JOIN sub_category ON book.sub_category_id = sub_category.id WHERE sub_category.main_category_id = ${mainCategoryId};`);
  console.log(result)
  connection.release();
  return result;
};
