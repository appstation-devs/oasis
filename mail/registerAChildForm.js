const nodemailer = require('nodemailer');
const smtp = require('nodemailer-smtp-transport');
require('dotenv').config();

exports.registerAChildMail = (formData, cb) => {
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
    subject: 'Register An Orphan Form data',
    html: `
      <h2>Treat As Urgent</h2>
      <P>This is to notify that someone wants to register an orphan via oasis of love website. Details below: </p>
      <br />
      <p><strong>Name: </strong> ${formData.name}</p>
      <p><strong>Gender: </strong> ${formData.gender}</p>
      <p><strong>Religion: </strong> ${formData.religion}</p>
      <p><strong>Marital Status: </strong> ${formData.maritalStatus}</p>
      <p><strong>Address: </strong> ${formData.address}</p>
      <p><strong>Email: </strong> ${formData.email}</p>
      <p><strong>Phone Number: </strong> ${formData.phone}</p>
      <h3>Child Data</h2>
      <p><strong>Name of Child: </strong> ${formData.nameOfChild}</p>
      <p><strong>Age of Child: </strong> ${formData.ageOfChild}</p>
      <p><strong>Gender of Child: </strong> ${formData.genderOfChild}</p>
      <p><strong>Home Town: </strong> ${formData.homeTown}</p>
      <p><strong>L.G.A.: </strong> ${formData.lga}</p>
      <p><strong>Nationality: </strong> ${formData.nationality}</p>
      <p><strong>Father's Name: </strong> ${formData.fathersName}</p>
      <p><strong>Death Date of Father: </strong> ${formData.deathDateOfFather}</p>
      <p><strong>Mother's Name: </strong> ${formData.mothersName}</p>
      <p><strong>Death Date of Mother: </strong> ${formData.deathDateOfMother}</p>
      <p><strong>Child's Class: </strong> ${formData.childsClass}</p>
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