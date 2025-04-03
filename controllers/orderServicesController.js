const OrderServicesService = require('../services/orderServicesService');

class OrderServicesController {
    static async createOrderService(req, res) {
        try {
            const { orderId, serviceId, providerId } = req.body;
            const result = await OrderServicesService.createOrderService({ orderId, serviceId, providerId });
            res.status(201).json({ message: "Order service created successfully", result });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getOrderServicesByOrderId(req, res) {
        try {
            const { orderId } = req.params;
            const services = await OrderServicesService.getOrderServicesByOrderId(orderId);
            res.status(200).json(services);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = OrderServicesController;
