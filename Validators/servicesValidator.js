const { body, validationResult } = require('express-validator');

const validateService = [
  body('name').notEmpty().withMessage('Service name is required'),
  body('description').notEmpty().withMessage('Service description is required'),
  body('price').isDecimal().withMessage('Price must be a valid decimal number').notEmpty().withMessage('Price is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateService };
