require('../config/verifyJwt');
const jwt = require('jsonwebtoken');

const passport =require('passport');
const lodash= require('lodash');
const router = require('express').Router();

const mongoose = require('mongoose');
let login = require('../models/login');

const User =mongoose.model('User');

module.exports.getUserData= (req,res,next)=>{
    
    User.findOne({_id:req._id},(err,user)=>{
        if(!user){
            return res.status(400).json({status:false,message:'user record not found'})
        }
        else
        return res.status(200).json({status:true,user :lodash.pick(user,['first_name','last_name','user_type','email'])})
    })
}

//module.exports = router;