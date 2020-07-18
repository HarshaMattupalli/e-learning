const mongoose = require('mongoose');

var logSchema = new mongoose.Schema({
    
    user_email: {
        type: String,
    },
    action: {
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

const logs=mongoose.model('log',logSchema);
module.exports =logs;
