// routes/orderPaymentsRoutes.js
const express = require('express');
const OrderPaymentsController = require('../controllers/orderPaymentsController');
const { validateOrderPayment } = require('../Validators/orderPaymentsValidator');
const router = express.Router();

router.post('/', validateOrderPayment, OrderPaymentsController.createOrderPayment);
router.get('/', OrderPaymentsController.getAllOrderPayments);
router.get('/:id', OrderPaymentsController.getOrderPaymentById);
router.put('/:id', validateOrderPayment, OrderPaymentsController.updateOrderPayment);
router.delete('/:id', OrderPaymentsController.deleteOrderPayment);

module.exports = router;
