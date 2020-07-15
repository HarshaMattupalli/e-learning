const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
require('./models/db');
require('dotenv').config();
require('./config/passportConfig');

const app = express();

//middle ware
app.use(cors());
app.use(passport.initialize());
app.use(express.json());

const admin = require('./routes/admin');
const login = require('./routes/login');
const accounts = require('./routes/accounts');
const register = require('./routes/user');
const getUserData = require('./routes/route');
const sendMail = require('./routes/mailSend');
const forgetPassword = require('./routes/forgetPassword');

app.use('/admin', admin);
app.use('/login', login);
app.use('/accounts', accounts);
app.use('/register', register);
app.use('/sendMail',sendMail);
app.use('/getuserdata',getUserData);
app.use('/forgetPassword',forgetPassword);

app.get('/', (req, res) => {
    res.send('Server is working !!!!')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});
