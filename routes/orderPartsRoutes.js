const express = require('express');
const OrderPartsController = require('../controllers/orderPartsController');
const router = express.Router();

router.post('/', OrderPartsController.createOrderPart);
router.get('/:orderId', OrderPartsController.getOrderPartsByOrderId);

module.exports = router;
