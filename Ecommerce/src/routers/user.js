const express = require('express');
const router = express.Router();
const User = require('../models/user')
const {} = require('express-validator')
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/user')
const { signup, signin } = require('../controllers/user')


router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/signin", validateSigninRequest, isRequestValidated, signin); 

// router.post("/profile",requireSignin, (req,res)=>{
//     res.status(200).json({ user:"profile" })
// });




module.exports = router;
