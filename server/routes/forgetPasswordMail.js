const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const router = require('express').Router();

const nodemailer = require('nodemailer');

router.get('/', (req, res) => {

  const oauth2Client = new OAuth2(
    "380500289033-hj2g6u6osr9ueo9493mcm8is5raimhln.apps.googleusercontent.com", // ClientID
    "QQ2qHtxvZ8yYM1J54QY5hUlq", // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
  );

  oauth2Client.setCredentials({
    refresh_token: "1//04F8pBNK-ktWHCgYIARAAGAQSNwF-L9Ir-qHCGMZ9knndb2Tsxt7ZD5gsr98jGJ3ydlAnG_fS4O3tC2U1crnq5PzdHPTavPCPrYQ"
  });
  const accessToken = oauth2Client.getAccessToken()
  
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "harsha@mindshire.pro",
      clientId: "380500289033-hj2g6u6osr9ueo9493mcm8is5raimhln.apps.googleusercontent.com",
      clientSecret: "QQ2qHtxvZ8yYM1J54QY5hUlq",
      refreshToken: "1//04F8pBNK-ktWHCgYIARAAGAQSNwF-L9Ir-qHCGMZ9knndb2Tsxt7ZD5gsr98jGJ3ydlAnG_fS4O3tC2U1crnq5PzdHPTavPCPrYQ",
      accessToken: "ya29.a0AfH6SMD7YOxkW4tReo3arSwL7rQQmTQWa6WMMgaV8hCqJqjMoP_TM8TS-cDiocOtJQb1YKtLbRiwxCmdiY4iCWU-Z6ulTdAirH83_HYBgPDW_fDYPEdDZu7OHecmsxFsEx4GJlmAjpqIV5Fa0PZ57_waJ6muYptpU54"
    }
  });
  const mailOptions = {
    from: "harsha@mindshire.pro",
    to: "harsha@mindshire.pro",
    subject: "Node.js Email with Secure OAuth",
    generateTextFromHTML: true,
    html: "<b>test</b>"
  };
  smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
  });
})
module.exports = router;
