const express = require('express');
const router = express.Router();
const mainCategoryController = require('../controller/main-category-ctrl');
const subCategoryController = require('../controller/sub-category-ctrl');

router.get('/main-category', mainCategoryController.getAllMainCategories);

router.get('/sub-category', subCategoryController.getAllSubCategories);

// router.get('/book', getAllMainCategories);

// router.get('/review', getAllMainCategories);

// router.get('/quote', getAllMainCategories);

module.exports = router;
