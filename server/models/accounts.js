const mongoose = require('mongoose');

var accountSchema = new mongoose.Schema({
    institute_type: {
        type: String,
    },
    account_name: {
        type: String,
    },
    admin_name: {
        type: String,
    },
    admin_email: {
        type: String,
    },
    users: {
        type: Number,
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
