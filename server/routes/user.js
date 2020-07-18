const mongoose = require('mongoose')
const router = require('express').Router();
let User = require('../models/user');
const passport = require('passport');
//const User =mongoose.model('User');
var objectId = require('mongoose').Types.ObjectId;


router.post('/', (req, res,next) => {
    var user = new User({
        
        name: req.body.name,
        mobile_number: Number(req.body.mobile_number),
        user_type: req.body.user_type,
        email: req.body.email,
        account_code:req.body.account_code,
        password: req.body.password,
        is_active: 1,
        created_by: req.body.created_by,
        updated_by: req.body.updated_by
    });
    user.save((err, user) => {
        if (!err) {
            res.send({ data: user });
        }
        else {
            if(err.code ==11000)
            res.status(422).send(['This email already Exits in our db'])
            else
            return next(err)
        }
    })

})

module.exports = router;