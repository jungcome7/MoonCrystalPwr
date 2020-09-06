const quote = require('../model/quote');

exports.getAllQuotes = async (req, res, next) => {
  const result = await quote.getAll();
  res.status(200).json(result[0]);
};

exports.getQuotesByMainCategoryId = async (req, res, next) => {
  const mainCategoryId = req.params.mainCategoryId;
  const result = await quote.getByMainCategoryId(mainCategoryId);
  res.status(200).json(result[0]);
};
