const nodemailer = require('nodemailer');

async function sendVerificationEmail(email, verificaionId) {
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  })

  let info = await transporter.sendMail({
    from: '"Kalandozó Károly" <hocus.pocus@vapenation.com>',
    to: email,
    subject: "Email megerősítés",
    text: "Kattints te pizza lover: " + process.env.VERIFY_LINK + verificaionId
  });

  console.log(info);
}

module.exports = {sendVerificationEmail}