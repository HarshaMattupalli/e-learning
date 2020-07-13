
const passport =require('passport');
const router = require('express').Router();

const mongoose = require('mongoose');
let login = require('../models/login');

const User =mongoose.model('User');


router.post('/', (req, res,next) => {
    passport.authenticate('local',(err,user,info)=>{
        // err from passport middleware
        if(err)
        return res.status(400).json(err).json(err); 
        //registered user
        else if(user)   
        return res.status(200).json({'token':user.generateJwt()})
        //unknown user or wrong password
        else 
        return res.status(404).json(info)     

    })(req,res);
})


module.exports = router;