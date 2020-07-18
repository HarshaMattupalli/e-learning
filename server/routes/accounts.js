
const router = require('express').Router();
let accounts = require('../models/accounts');
const { route } = require('./admin');
const util = require('../util/util');

router.get('/',(req,res)=>{
    //accounts.find({ is_active: 1 },(err,data)=>{
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
        account_code:req.body.account_code,
        users: Number(req.body.users),
        remarks:req.body.remarks,
        is_active: 1,
        created_by: req.body.created_by,
        updated_by: req.body.updated_by
     })
    account.save((err, account) => {
        if (!err) {
            console.log("@@@",account._id, account.admin_email, req.body.account_name);
            util.log(account._id, account.admin_email, req.body.account_name + ' has been added in acount.');
            res.send({ data: account });

        }
        else {
            res.send('error')
        }
    })
})
router.put('/:id', (req, res) => {

    var account =new accounts({
        institute_type: req.body.institute_type,
        account_name: req.body.account_name,
        admin_name:req.body.admin_name,
        admin_email:req.body.admin_email,
        account_code:req.body.account_code,
        users: Number(req.body.users),
        remarks:req.body.remarks,
        is_active: req.body.is_active,
        created_by: req.body.created_by,
        updated_by: req.body.updated_by
     })
     accounts.findByIdAndUpdate(req.params._id, { $set: account }, { new: true }, (err, data) => {
        if (!err) { res.send(data); }
        else { 
            
            console.log(`@@@@ ${err}`);
            console.log('Error in account Update :' + JSON.stringify(err, undefined, 2)); }
    });
})


module.exports= router;