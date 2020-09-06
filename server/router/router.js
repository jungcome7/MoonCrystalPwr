const express = require('express');
const router = express.Router();
const mainCategoryController = require('../controller/main-category-ctrl');
const subCategoryController = require('../controller/sub-category-ctrl');
const bookController = require('../controller/book-ctrl');
const reviewController = require('../controller/review-ctrl');
const quoteController = require('../controller/quote-ctrl');

router.get('/main-category', mainCategoryController.getAllMainCategories);

router.get('/sub-category', subCategoryController.getAllSubCategories);
router.get(
  '/sub-category/:mainCategoryId',
  subCategoryController.getSubCategoriesByMainCategoryId
);

router.get('/book', bookController.getAllBooks);
router.get('/book/:mainCategoryId', bookController.getBooksByMainCategoryId);

router.get('/review', reviewController.getAllReviews);
router.get('/review/:mainCategoryId', reviewController.getReviewsByMainCategoryId);

router.get('/quote', quoteController.getAllQuotes);
router.get('/quote/:mainCategoryId', quoteController.getQuotesByMainCategoryId);

module.exports = router;
