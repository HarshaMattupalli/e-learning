const express = require('express');
const router = express.Router();


const userData = require('../routes/userData');
const verify =require('../config/verifyJwt');

router.get('/', verify.verifyJwtToken,userData.getUserData);

module.exports= router;