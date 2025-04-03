// validator/usersValidator.js
const { body, validationResult } = require('express-validator');

const validateUser = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Email must be valid'),
  body('phoneNumber').notEmpty().withMessage('Phone number is required'),
  body('address').notEmpty().withMessage('Address is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validateUserId = [
  body('userId').isInt().withMessage('User ID must be an integer'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateUser,
  validateUserId
};
