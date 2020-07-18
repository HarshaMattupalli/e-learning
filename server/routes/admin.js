//const mongoose = require('mongoose')
const router = require('express').Router();
let admin = require('../models/admin');
var objectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
    admin.find({ is_active: 1 }, (err, data) => {
        if (!err) {
            res.send(data);
        }
        else {
            res.send('error')
        }
    })
})
router.post('/', (req, res) => {
    var new_admin = new admin({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        mobile_number: Number(req.body.mobile_number),
        is_active: 1,
        created_by: req.body.created_by,
        updated_by: req.body.updated_by
    });

    new_admin.save((err, admin) => {
        if (!err) {
            res.send({ data: admin });
        }
        else {
            res.send('error')
        }
    })

})
router.get('/:id', (req, res) => {
    if (objectId.isValid(req.params._id))
        return res.status(400).send(`No record found with given id : ${req.params.id}`)

    admin.findById(req.params.id, (err, data) => {
        if (!err) {
            res.send(data)
        }
        else {
            res.status(400).send(`No record found with given id : ${req.params.id}`);
            console.log(`Error in retreving data : ${JSON.stringify(err, undefined, 2)}`);

        }
    })
})
router.put('/:id', (req, res) => {
    if (objectId.isValid(req.params._id))
        return res.status(400).send(`No record found with given id : ${req.params.id}`);
    var new_admin = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        mobile_number: Number(req.body.mobile_number),
        is_active: 1,
        created_by: req.body.created_by,
        updated_by: req.body.updated_by
    };
    admin.findByIdAndUpdate(req.params.id, { $set: new_admin }, { new: true }, (err, data) => {
        if (!err) { res.send(data); }
        else { console.log('Error in admin Update :' + JSON.stringify(err, undefined, 2)); }
    });
})

router.delete('/:id', (req, res) => {
    if (objectId.isValid(req.params._id))
        return res.status(400).send(`No record found with given id : ${req.params.id}`);
    var new_admin = {
        is_active: 0
    };
    admin.findByIdAndUpdate(req.params.id, { $set: new_admin }, { new: true }, (err, data) => {
        if (!err) { res.send(data) }
        else { console.log('Error in admin Update :' + JSON.stringify(err, undefined, 2)); }
    });

})
module.exports = router;