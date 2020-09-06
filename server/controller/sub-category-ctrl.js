const subCategory = require('../model/sub-category');

exports.getAllSubCategories = async (req, res, next) => {
    const result = await subCategory.getAll();
    res.status(200).json(result[0]);
  };