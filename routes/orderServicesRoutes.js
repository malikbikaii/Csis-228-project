const express = require('express');
const OrderServicesController = require('../controllers/orderServicesController');
const router = express.Router();

router.post('/', OrderServicesController.createOrderService);
router.get('/:orderId', OrderServicesController.getOrderServicesByOrderId);

module.exports = router;
