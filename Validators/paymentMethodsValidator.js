const { body, validationResult } = require('express-validator');

const validatePaymentMethod = [
  body('methodName').notEmpty().withMessage('Method name is required'),
  body('description').notEmpty().withMessage('Description is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validatePaymentMethod };
