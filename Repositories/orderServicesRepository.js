const db = require('../config/db');
const OrderService = require('../models/orderServicesModel');

class OrderServicesRepository {
    static async createOrderService(orderServiceData) {
        try {
            const query = `
                INSERT INTO order_services (order_id, service_id, provider_id)
                VALUES (?, ?, ?)
            `;
            const result = await db.execute(query, [
                orderServiceData.orderId,
                orderServiceData.serviceId,
                orderServiceData.providerId
            ]);
            return result.insertId;
        } catch (error) {
            throw new Error("Error creating order service: " + error.message);
        }
    }

    static async getOrderServicesByOrderId(orderId) {
        try {
            const query = "SELECT * FROM order_services WHERE order_id = ?";
            const rows = await db.query(query, [orderId]);
            return rows.map(OrderService.fromRow);
        } catch (error) {
            throw new Error("Error fetching order services: " + error.message);
        }
    }
}

module.exports = OrderServicesRepository;
