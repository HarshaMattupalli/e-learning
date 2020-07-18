const mongoose = require('mongoose');

var accountSchema = new mongoose.Schema({
    institute_type: {
        type: String,
        required:true
    },
    account_name: {
        type: String,
        required:true
    },
    admin_name: {
        type: String,
        required:true
    },
    admin_email: {
        type: String,
        required:true
    },
    account_code:{
        type:String,
        required:true
    },
    users: {
        type: Number,
        required:true
    },
    remarks: {
        type: String,

    },
    is_active: {
        type: Number,
    },
    created_by: {
        type: String
    },
    updated_by: {
        type: String
    }

},{
    timestamps: true
})

const accounts=mongoose.model('accounts',accountSchema);
module.exports =accounts;
