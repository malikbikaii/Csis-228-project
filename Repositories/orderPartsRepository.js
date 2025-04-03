const db = require('../config/db');
const OrderPart = require('../models/orderPartsModel');

class OrderPartsRepository {
    static async createOrderPart(orderPartData) {
        try {
            const query = `
                INSERT INTO order_parts (order_id, part_id, quantity)
                VALUES (?, ?, ?)
            `;
            const result = await db.execute(query, [
                orderPartData.orderId,
                orderPartData.partId,
                orderPartData.quantity
            ]);
            return result.insertId;
        } catch (error) {
            throw new Error("Error creating order part: " + error.message);
        }
    }

    static async getOrderPartsByOrderId(orderId) {
        try {
            const query = "SELECT * FROM order_parts WHERE order_id = ?";
            const rows = await db.query(query, [orderId]);
            return rows.map(OrderPart.fromRow);
        } catch (error) {
            throw new Error("Error fetching order parts: " + error.message);
        }
    }
}

module.exports = OrderPartsRepository;
