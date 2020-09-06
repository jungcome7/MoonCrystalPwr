const review = require('../model/review');

exports.getAllReviews = async (req, res, next) => {
  const result = await review.getAll();
  res.status(200).json(result[0]);
};

exports.getReviewsByMainCategoryId = async (req, res, next) => {
  const mainCategoryId = req.params.mainCategoryId;
  const result = await review.getByMainCategoryId(mainCategoryId);
  res.status(200).json(result[0]);
};
