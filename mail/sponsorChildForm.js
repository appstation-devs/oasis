const nodemailer = require('nodemailer');
const smtp = require('nodemailer-smtp-transport');
require('dotenv').config();

exports.sponsorMail = (formData, cb) => {
  const transporter = nodemailer.createTransport(smtp({
    service: 'appstation',
    host: 'mail.appstation.ng',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  }));

  const mailOptions = {
    from: process.env.USER,
    to:  process.env.RECIEVER,
    subject: 'Sponsorship Form data',
    html: `
      <h2>Treat As Urgent</h2>
      <P>This is to notify that someone wants to sponsor a child via oasis of love website. Details below: </p>
      <br />
      <p><strong>Name: </strong> ${formData.name}</p>
      <p><strong>Gender: </strong> ${formData.gender}</p>
      <p><strong>Religion: </strong> ${formData.religion}</p>
      <p><strong>Marital Status: </strong> ${formData.maritalStatus}</p>
      <p><strong>Address: </strong> ${formData.address}</p>
      <p><strong>Email: </strong> ${formData.email}</p>
      <p><strong>Phone Number: </strong> ${formData.phone}</p>
      <p><strong>Prefered Age of Child: </strong> ${formData.preferedAgeOfChild}</p>
      <p><strong>Prefered Gender of Child: </strong> ${formData.preferedGenderOfChild}</p>
      <p><strong>Nature of Commitment: </strong> ${formData.natureOfCommitment}</p>
      <br />
      <br />
      <p>Please do not reply to this mail</p>
    `,
  };

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take our messages', success);
    }
  });

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      cb(err.message, null);
    } else {
      cb(null, "Your message was successfully sent! Expect feedback shortly");
    }
  });
};