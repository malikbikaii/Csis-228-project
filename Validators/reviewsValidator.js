const { body, validationResult } = require('express-validator');

const validateReview = [
  body('orderId').isInt().withMessage('Order ID must be an integer'),
  body('providerId').isInt().withMessage('Provider ID must be an integer'),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
  body('reviewText').optional().isString().withMessage('Review text must be a string'),
  body('reviewDate').isDate().withMessage('Review Date must be a valid date'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateReview };
