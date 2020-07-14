const router = require('express').Router();

const nodemailer = require('nodemailer');

router.get('/', (req, res) => {
 
 //var transporter= nodemailer.createTransport(`smtps://harsha@mindshire.pro:${process.e}`);

  var transporter = nodemailer.createTransport({
    service: "mindshire.pro",
    port: 465,
    secure: true, 
    auth: {
      user: "harsha@mindshire.pro",
      pass: process.env.PASSWORD
    }

  });

  var mailOptions = {
    from: "harsha@mindshire.pro",
    to: "harsha@mindshire.pro",
    subject: "email from nodejs",
    text: `forger password
                 email`
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (!err) {
      console.log('Email sent: ' + info.response);
    } else {
      console.log("@@@@@@@@@",err);
    }
  });
})
module.exports = router;
