const { body, validationResult } = require('express-validator');

const contactFormValidationRules = () => {
  return [
    body('name').isLength({ min: 2 }).trim().escape(),
    body('phone').isLength({ min: 11, max: 11 }).trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('message').isLength({ min: 2 }).trim().escape(),
  ];
};

const registerAChildValidationRules = () => {
  return [
    body('name').isLength({ min: 2 }).trim().escape(),
    body('gender').isLength({ min: 2 }).trim().escape(),
    body('religion').isLength({ min: 2 }).trim().escape(),
    body('maritalStatus').isLength({ min: 2 }).trim().escape(),
    body('address').isLength({ min: 2 }).trim().escape(),
    body('phone').isLength({ min: 11, max: 11 }).trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('nameOfChild').isLength({ min: 2 }).trim().escape(),
    body('ageOfChild').isLength({ min: 2 }).trim().escape(),
    body('genderOfChild').isLength({ min: 2 }).trim().escape(),
    body('homeTown').isLength({ min: 2 }).trim().escape(),
    body('lga').isLength({ min: 2 }).trim().escape(),
    body('nationality').isLength({ min: 2 }).trim().escape(),
    body('fathersName').isLength({ min: 2 }).trim().escape(),
    body('deathDateOfFather').isLength({ min: 2 }).trim().escape(),
    body('mothersName').isLength({ min: 2 }).trim().escape(),
    body('deathDateOfMother').isLength({ min: 2 }).trim().escape(),
    body('childsClass').trim().escape(),
  ];
};

const volunteerFormValidationRules = () => {
  return [
    body('name').isLength({ min: 2 }).trim().escape(),
    body('gender').isLength({ min: 2 }).trim().escape(),
    body('religion').isLength({ min: 2 }).trim().escape(),
    body('maritalStatus').isLength({ min: 2 }).trim().escape(),
    body('address').isLength({ min: 2 }).trim().escape(),
    body('phone').isLength({ min: 11, max: 11 }).trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('serviceDuration').isLength({ min: 2 }).trim().escape(),
    body('areaOfService').isLength({ min: 2 }).trim().escape(),
  ];
};

const sponsorFormValidationRules = () => {
  return [
    body('name').isLength({ min: 2 }).trim().escape(),
    body('gender').isLength({ min: 2 }).trim().escape(),
    body('religion').isLength({ min: 2 }).trim().escape(),
    body('maritalStatus').isLength({ min: 2 }).trim().escape(),
    body('address').isLength({ min: 2 }).trim().escape(),
    body('phone').isLength({ min: 11, max: 11 }).trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('preferedAgeOfChild').isLength({ min: 2 }).trim().escape(),
    body('preferedGenderOfChild').isLength({ min: 2 }).trim().escape(),
    body('natureOfCommitment').isLength({ min: 2 }).trim().escape(),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(422).json({
    error: 'Please ensure you entered correct data in all fields',
  });
};

module.exports = {
  contactFormValidationRules,
  registerAChildValidationRules,
  volunteerFormValidationRules,
  sponsorFormValidationRules,
  validate
};