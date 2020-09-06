const express = require('express');
const router = express.Router();
const mainCategroyController = require('./../controller/main-category');

router.get('/main-category', mainCategroyController.getAllMainCategories);

// router.get('/sub-category', getAllMainCategories);

// router.get('/book', getAllMainCategories);

// router.get('/review', getAllMainCategories);

// router.get('/quote', getAllMainCategories);

module.exports = router;
