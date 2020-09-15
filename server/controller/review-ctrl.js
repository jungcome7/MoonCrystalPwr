const review = require('../model/review');

exports.getReviewsByBookId = async (req, res, next) => {
  const bookId = req.params.bookId;
  const result = await review.getByBookId(bookId);
  res.status(200).json(result[0]);
};
