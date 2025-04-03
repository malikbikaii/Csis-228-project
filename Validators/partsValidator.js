// validator/partsValidator.js
const { body, validationResult } = require('express-validator');

const validatePart = [
  body('name').notEmpty().withMessage('Part name is required'),
  body('price').isDecimal().withMessage('Price must be a valid decimal'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validatePart
};
