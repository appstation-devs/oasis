var express = require('express');
var path = require('path');
var router = express.Router();
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

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

app.use('/', router);
app.listen(process.env.PORT || 3000);