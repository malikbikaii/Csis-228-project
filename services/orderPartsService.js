const OrderPartsRepository = require('../Repositories/orderPartsRepository');

class OrderPartsService {
    static async createOrderPart(orderPart) {
        try {
            return await OrderPartsRepository.createOrderPart(orderPart);
        } catch (error) {
            throw new Error("Error creating order part: " + error.message);
        }
    }

    static async getOrderPartsByOrderId(orderId) {
        try {
            return await OrderPartsRepository.getOrderPartsByOrderId(orderId);
        } catch (error) {
            throw new Error("Error fetching order parts: " + error.message);
        }
    }
}

module.exports = OrderPartsService;
