const router = require('express').Router();
const user = require('../models/user');


router.put('/', (req, res) => {
    user.findOne({ email: req.body.email }, (err, data) => {
        if (data) {
            res.send(data);
            
        }
        else {
            res.status(400).send(`No record found with given email : ${req.body.email}`);
        }
    })
})


module.exports = router;