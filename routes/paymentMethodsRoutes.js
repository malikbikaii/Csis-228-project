const express = require('express');
const PaymentMethodsController = require('../controllers/paymentMethodsController');
const router = express.Router();

router.post('/', PaymentMethodsController.createPaymentMethod);
router.get('/', PaymentMethodsController.getPaymentMethods);

module.exports = router;
