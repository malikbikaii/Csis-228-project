const OrderPartsService = require('../services/orderPartsService');

class OrderPartsController {
    static async createOrderPart(req, res) {
        try {
            const { orderId, partId, quantity } = req.body;
            const result = await OrderPartsService.createOrderPart({ orderId, partId, quantity });
            res.status(201).json({ message: "Order part created successfully", result });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getOrderPartsByOrderId(req, res) {
        try {
            const { orderId } = req.params;
            const parts = await OrderPartsService.getOrderPartsByOrderId(orderId);
            res.status(200).json(parts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = OrderPartsController;
