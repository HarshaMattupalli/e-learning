const mongoose = require('mongoose');
const logs = require('../models/log');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;


const nodemailer = require('nodemailer');

exports.log = function (id, email, msg) {

    var message = new logs({
        obj_id: id,
        user_email: email,
        action: msg

    })
    message.save((err, message) => {
        if (!err) {
            //console.log(`data added in log`);
        }
        else {
            console.log(`error in log adding`);
        }
    })

};

exports.sendMail = function (to_mail, subject, message) {
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
        to: to_mail,
        subject: subject,
        generateTextFromHTML: true,
        html: `<b>${message}</b>`
    };
    smtpTransport.sendMail(mailOptions, (err, response) => {
        if (!err) {
            console.log('mail sent');
        }
        else {
            res.send(err);
        }
        smtpTransport.close();
    });
}