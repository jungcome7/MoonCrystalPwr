const book = require('../model/book');

exports.getAllBooks = async (req, res, next) => {
  const result = await book.getAll();
  res.status(200).json(result[0]);
};

exports.getBooksByMainCategoryId = async (req, res, next) => {
  const mainCategoryId = req.params.mainCategoryId
  const result = await book.getByMainCategoryId(mainCategoryId);
  res.status(200).json(result[0]);
};
