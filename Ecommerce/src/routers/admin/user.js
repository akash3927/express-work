const express = require('express');
const router = express.Router();
const User = require('../../models/user')
const { signup, signin } = require('../../controllers/admin/user')


router.post("/admin/signup",signup);
router.post("/admin/signin",signin);





module.exports = router;
