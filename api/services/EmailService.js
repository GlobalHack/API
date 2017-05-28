var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var smtpConfig = {
  service: "SES",
  auth   : {
    user: process.env.SES_USER,
    pass: process.env.SES_PASS
  }
};
var transporter = nodemailer.createTransport(smtpConfig);

// setup e-mail data
var mailOptions = {
  from   : '"Cemaritan" <invite@cemaritan.com>', // sender address
  subject: 'Cemaritan Invite', // Subject line
  text   : 'You\'re invited to Cemaritan! https://app.cemaritan.com/', // plaintext body
  html   : 'You\'re invited to <a href="https://app.cemaritan.com/">Cemaritan!</a><br /><br />' // html body
};

/// Example callback for sendInvite
// function callback(error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Message sent: ' + info.response);
//   }
//   return {error: error, info: info};
// }

module.exports.sendInvite = function (invite_email, user, cb) {
  // send mail with defined transport object
  mailOptions.to = invite_email;
  mailOptions.html += user.id+" has invited you to join organization "+user.organization+" on cemaritan";
  transporter.sendMail(mailOptions, cb);
};
