const mainCategory = require('../model/main-category');

exports.getAllMainCategories = async (req, res, next) => {
    const result = await mainCategory.getAllMainCategories();
    res.status(200).json(result[0]);
  };