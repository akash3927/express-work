const express = require("express");
const { addItemToCart } = require("../controllers/cart");
const router = express.Router();

router.post("/cart/addtocart", addItemToCart);


module.exports = router;