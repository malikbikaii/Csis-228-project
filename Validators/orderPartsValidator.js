const { body, validationResult } = require('express-validator');

const validateOrderPart = [
  body('orderId').isInt().withMessage('Order ID must be an integer'),
  body('partId').isInt().withMessage('Part ID must be an integer'),
  body('quantity').isInt().withMessage('Quantity must be an integer'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateOrderPart };
