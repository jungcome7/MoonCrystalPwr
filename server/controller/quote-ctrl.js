const quote = require('../model/quote');

exports.getQuotesByBookId = async (req, res, next) => {
  const bookId = req.params.bookId;
  const result = await quote.getByBookId(bookId);
  res.status(200).json(result[0]);
};
