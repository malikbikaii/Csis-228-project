// validator/orderPaymentsValidator.js
const { body, validationResult } = require('express-validator');

const validateOrderPayment = [
  body('orderId').isInt().withMessage('Order ID must be an integer'),
  body('paymentMethodId').isInt().withMessage('Payment method ID must be an integer'),
  body('paymentStatus').notEmpty().withMessage('Payment status is required'),
  body('paymentDate').isISO8601().withMessage('Payment date must be a valid date'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateOrderPayment
};
