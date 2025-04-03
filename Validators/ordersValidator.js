// dtos/order.dto.js
const { body, param, validationResult } = require('express-validator');

const validateOrder = [
  body('userId').isInt().withMessage('User ID must be an integer'),
  body('orderDate').isISO8601().withMessage('Order date must be a valid date'),
  body('status').notEmpty().withMessage('Status is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validateOrderId = [
  param('id').isInt().withMessage('Order ID must be an integer'),
  (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateOrder,
  validateOrderId
};
