const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: 'Name can\'t be Empty'
    },
    user_type: {
        type: String,
        required: 'Name can\'t be Empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be Empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can\'t be Empty',
    },
    account_code:{
          type:String,
          required:true
    },
    otp: {
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
    },
    saltSecret: String
}, {
    timestamps: true
});


//validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

//validation for password
// userSchema.path('password').validate((val) => {
//     passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
//     return passwordRegex.test(val);
// }, 'password has atleast 6 characters and in that one lowercase,one uppercase,one specialcharacter');

//pre event for  salt secret 
userSchema.pre('save', function (next) {
    bcryptjs.genSalt(10, (err, salt) => {
        bcryptjs.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        })
    })
}); 

//methods
userSchema.methods.verifyPassword = function (password) {
    //console.log(password,this.password);
    //console.log(bcryptjs.compareSync(password,this.password));
    return bcryptjs.compareSync(password,this.password);
}


userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id },
        process.env.SECRETE,
        {
            expiresIn: process.env.JWT_EXP
        })
}


const User = mongoose.model('User', userSchema);
module.exports = User;
//mongoose.model('User',userSchema);
