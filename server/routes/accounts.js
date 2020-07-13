
const router = require('express').Router();
let accounts = require('../models/accounts');
const { route } = require('./admin');

router.get('/',(req,res)=>{
    accounts.find((err,data)=>{
        if (!err) {
            res.send(data);
        }
        else {
            res.send('error')
        }
    })
})
router.post('/',(req,res)=>{
     var account =new accounts({
        institute_type: req.body.institute_type,
        account_name: req.body.account_name,
        admin_name:req.body.admin_name,
        admin_email:req.body.admin_email,
        users: Number(req.body.users),
        remarks:req.body.remarks,
        is_active: 1,
        created_by: req.body.created_by,
        updated_by: req.body.updated_by
     })
    account.save((err, account) => {
        if (!err) {
            res.send({ data: account });
        }
        else {
            res.send('error')
        }
    })
})

module.exports= router;