const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const router = require('express').Router();

const nodemailer = require('nodemailer');

router.get('/', (req, res) => {

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
    to: "harsha@mindshire.pro",
    subject: "Node.js Email with Secure OAuth",
    generateTextFromHTML: true,
    html: "<b>changed</b>"
  };
  smtpTransport.sendMail(mailOptions, (err, response) => {
    if(!err){
      res.send('mail sent');
    }
    else{
      res.send(err);
    }
    smtpTransport.close();
  });
})
module.exports = router;
