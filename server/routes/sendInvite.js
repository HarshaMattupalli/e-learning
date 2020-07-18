const crypto = require('crypto');
const router = require('express').Router();
const util = require('../util/util');
let accounts = require('../models/accounts');
let user  = require('../models/user');

router.post('/',(req,res,next)=>{
    accounts.findById(req.body.id, (err, data) => {
        if (!err) {
            var password = crypto.randomBytes(Math.ceil(12 / 2)).toString('hex').slice(0, 12);
            console.log(password);
            var new_user = new user({
                name: req.body.admin_name,
                user_type: 'admin',
                email: req.body.admin_email,
                password: password,
                is_active: 1,
                created_by: req.body.created_by,
                updated_by: req.body.updated_by
            });
            new_user.save((err, user) => {
                if (!err) {
                   console.log(`user added in user schema`);;
                }
                else {
                    if(err.code ==11000)
                    res.status(422).send(['This email already Exits in our db'])
                    else
                    return next(err)
                }
            })
            var message= `You can login into your digi insti using  this details 
            email = ${req.body.admin_email}
            password = ${password}
            `
            util.sendMail (data.admin_email, `Invitation`, 'message');
            res.send(` Invitation send in Mail`);
        }
        else {
            res.status(400).send(`No record found with given id : ${req.params.id}`);
            console.log(`Error in retreving data : ${JSON.stringify(err, undefined, 2)}`);
        }
    })
})
module.exports = router;