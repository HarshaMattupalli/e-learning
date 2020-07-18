const router = require('express').Router();
const user = require('../models/user');
const crypto = require('crypto');
const { ceil } = require('lodash');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const nodemailer = require('nodemailer');
const util = require('../util/util');

router.put('/', (req, res) => {
    user.findOne({ email: req.body.email }, (err, data) => {
        if (data) {
            //res.send(data);
            var randomNumber = crypto.randomBytes(Math.ceil(12 / 2)).toString('hex').slice(0, 12);
            console.log(`randomNumber is  ${randomNumber}`);
            var user_otp = {
                otp: randomNumber
            }
            const oauth2Client = new OAuth2(
                process.env.CLIENT_ID, // ClientID
                process.env.CLINET_SECRETE, // Client Secret
                "https://developers.google.com/oauthplayground" // Redirect URL
            );

            oauth2Client.setCredentials({
                refresh_token: process.env.REFRESH_TOKEN
            });
            const accessToken = oauth2Client.getAccessToken()

            const smtpTransport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: "harsha@mindshire.pro",
                    clientId: process.env.CLIENT_ID,
                    clientSecret: process.env.CLINET_SECRETE,
                    refreshToken: process.env.REFRESH_TOKEN,
                    accessToken: process.env.ACCESS_TOKEN
                }
            });
            const mailOptions = {
                from: "harsha@mindshire.pro",
                to: req.body.email,
                subject: "Password Reset",
                generateTextFromHTML: true,
                html: `<b>Otp for your forget password : ${randomNumber}</b>`
            };
            smtpTransport.sendMail(mailOptions, (err, response) => {
                if (!err) {
                    res.send('mail sent');
                }
                else {
                    res.send(err);
                }
                smtpTransport.close();
            });
            user.findOneAndUpdate({ email: req.body.email }, { $set: user_otp }, { new: true }, (err, data) => {
                if (!err) {
                    util.log(user._id, user.email, 'tried to change password');
                    res.send(`verify email`);
                }
                else { console.log('Error in user otp:' + JSON.stringify(err, undefined, 2)); }
            })
        }
        else {
            res.status(400).send(`No record found with given email : ${req.body.email}`);
        }
    })
})


module.exports = router;