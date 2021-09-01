const express = require("express");
const { createProduct } = require("../controllers/product");
const multer = require('multer')
// const upload = multer({ dest: "uplods/"})
const router = express.Router();
const shortid = require('shortid');
const path = require('path')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), 'uplods'));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage })

router.post('/product/create', upload.array('productPicture'), createProduct);

module.exports = router;