const { body, validationResult } = require('express-validator');

const validateServiceProvider = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Email must be valid'),
  body('phoneNumber').notEmpty().withMessage('Phone number is required'),
  body('location').notEmpty().withMessage('Location is required'),
  body('serviceType').notEmpty().withMessage('Service type is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateServiceProvider };
