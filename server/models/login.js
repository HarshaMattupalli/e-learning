const mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {
    timestamps: true
})

const login = mongoose.model('login',loginSchema);
module.exports = login;