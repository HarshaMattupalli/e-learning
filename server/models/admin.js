const mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    mobile_number: {
        type: Number,
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

const admin=mongoose.model('admin',adminSchema);
module.exports =admin;
