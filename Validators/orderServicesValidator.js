const { body, validationResult } = require('express-validator');

const validateOrderService = [
  body('orderId').isInt().withMessage('Order ID must be an integer'),
  body('serviceId').isInt().withMessage('Service ID must be an integer'),
  body('providerId').optional().isInt().withMessage('Provider ID must be an integer'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateOrderService };
