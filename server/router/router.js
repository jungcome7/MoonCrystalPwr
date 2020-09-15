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
  '/main-category/:mainCategoryId/sub-category',
  subCategoryController.getSubCategoriesByMainCategoryId
);

router.get('/book', bookController.getAllBooks);
router.get(
  '/book/main/:mainCategoryId',
  bookController.getBooksByMainCategoryId
);
router.get('/book/sub/:subCategoryId', bookController.getBooksBySubCategoryId);

router.get('/review/:bookId', reviewController.getReviewByBookId);

router.get('/quote/:bookId', quoteController.getQuotesByBookId);

module.exports = router;
