const pool = require('../config/db');  // Import the pool object

class OrderRepository {
  // Create a new order
  static async createOrder(order) {
    try {
      const query = `
        INSERT INTO orders (user_id, order_date, status)
        VALUES (?, ?, ?)
      `;
      const result = await pool.query(query, [
        order.userId,
        order.orderDate,
        order.status
      ]);
      return { affectedRows: result.affectedRows, insertId: result.insertId };
    } catch (error) {
      console.error("Error creating order: ", error);
      throw new Error("Error creating order: " + error.message);
    }
  }

  // Retrieve an order by its ID
  static async getOrderById(orderId) {
    try {
      const query = "SELECT * FROM orders WHERE order_id = ?";
      const rows = await pool.query(query, [orderId]);
      return rows.length === 0 ? null : Order.fromRow(rows[0]);
    } catch (error) {
      console.error("Error fetching order: ", error);
      throw new Error("Error fetching order: " + error.message);
    }
  }

  // Other methods for getAllOrders, updateOrder, deleteOrder...
}

module.exports = OrderRepository;
