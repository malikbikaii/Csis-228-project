const OrderServicesRepository = require('../Repositories/orderServicesRepository');

class OrderServicesService {
    static async createOrderService(orderService) {
        try {
            return await OrderServicesRepository.createOrderService(orderService);
        } catch (error) {
            throw new Error("Error creating order service: " + error.message);
        }
    }

    static async getOrderServicesByOrderId(orderId) {
        try {
            return await OrderServicesRepository.getOrderServicesByOrderId(orderId);
        } catch (error) {
            throw new Error("Error fetching order services: " + error.message);
        }
    }
}

module.exports = OrderServicesService;
