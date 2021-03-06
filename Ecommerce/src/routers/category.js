const express = require('express');
const Category = require('../models/category');
const slugify = require('slugify');
const { addCategory, getCategories } = require('../controllers/category');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const router = express.Router();

router.post("/category/create", addCategory ); 
router.get("/category/getcategory", getCategories ); 
module.exports = router