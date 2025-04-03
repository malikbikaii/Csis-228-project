const express = require('express');
const OrderController = require('../controllers/ordersController');
const { validateOrder, validateOrderId } = require('../Validators/ordersValidator');

const router = express.Router();

router.post('/', validateOrder, OrderController.createOrder);
router.get('/', OrderController.getAllOrders);
router.get('/:id', validateOrderId, OrderController.getOrderById);
router.put('/:id', validateOrderId, validateOrder, OrderController.updateOrder);
router.delete('/:id', validateOrderId, OrderController.deleteOrder);

module.exports = router;
