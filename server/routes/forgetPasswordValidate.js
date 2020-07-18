const router = require('express').Router();
let admin = require('../models/admin');
const user = require('../models/user');
const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');
const util = require('../util/util');

router.put('/', (req, res) => {
    user.findOne({ email: req.body.email }, (err, data) => {
        if (!err) {
            if (data.otp == req.body.otp) {
                bcryptjs.genSalt(10, (err, salt) => {
                    bcryptjs.hash(req.body.password, salt, (err, hash) => {
                        req.body.password = hash;
                        console.log(req.body.password);
                        this.saltSecret = salt;
                        var user_pwd = {
                            password: req.body.password,
                            otp: ''
                        }
                        user.findOneAndUpdate({ email: req.body.email }, { $set: user_pwd }, { new: true }, (err, data) => {
                            if (!err) { 
                                util.log(user._id,user.email,' password has been updated succesfully');
                                res.send(`password updated succesfully`);
                             }
                            else { console.log('Error in  user_pwd:' + JSON.stringify(err, undefined, 2)); }
                        })
                    })
                })
            }
            else {
                res.status(400).send(`plase enter valid otp`);
            }
        }
        else {
            res.status(400).send(`plase enter valid details`);
        }
    })
})

module.exports = router;