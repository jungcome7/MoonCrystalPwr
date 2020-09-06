const subCategory = require('../model/sub-category');

exports.getAllSubCategories = async (req, res, next) => {
  const result = await subCategory.getAll();
  res.status(200).json(result[0]);
};

exports.getSubCategoriesByMainCategoryId = async (req, res, next) => {
  const mainCategoryId = req.params.mainCategoryId
  const result = await subCategory.getByMainCategoryId(mainCategoryId);
  res.status(200).json(result[0]);
};
