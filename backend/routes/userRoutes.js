const express = require('express');
const { registerUser, login } = require('../controllers/userControllers');

const router = express.Router();


router.route('/').post(registerUser);
router.post('/login',login);


module.exports = router;