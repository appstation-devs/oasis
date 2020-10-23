const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const router = express.Router();

const { contactFormValidationRules, registerAChildValidationRules, validate } = require('./validators/forms');
const contactForm = require('./mail/contactForm');
const registerAChildMail = require('./mail/registerAChild');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/contact-form', contactFormValidationRules(), validate, (req, res) => {
  const data = { ...req.body };
  contactForm.contactMail(data, (error, response) => {
    if (error) {
      res.status(500).json({ error: error });
    } else {
      res.status(200).json({ message: response });
    }
  });
});

app.post('/register-child-form', registerAChildValidationRules(), validate, (req, res) => {
  const data = { ...req.body };
  contactForm.contactMail(data, (error, response) => {
    if (error) {
      res.status(500).json({ error: error });
    } else {
      res.status(200).json({ message: response });
    }
  });
});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});
router.get('/who-we-are', (req, res) => {
  res.sendFile(path.join(__dirname+'/about.html'));
});
router.get('/what-we-do', (req, res) => {
  res.sendFile(path.join(__dirname+'/services.html'));
});
router.get('/get-in-touch', (req, res) => {
  res.sendFile(path.join(__dirname+'/contact.html'));
});
app.get('/volunteer', (req, res) => {
  res.sendFile(path.join(__dirname+'/volunteer.html'));
});
app.get('/sponsor-a-child', (req, res) => {
  res.sendFile(path.join(__dirname+'/sponsor.html'));
});
app.get('/register-an-orphan', (req, res) => {
  res.sendFile(path.join(__dirname+'/dropAChild.html'));
});
app.get('/donate', (req, res) => {
  res.sendFile(path.join(__dirname+'/donate.html'));
});

app.use('/', router);
app.listen(process.env.PORT || 3000);