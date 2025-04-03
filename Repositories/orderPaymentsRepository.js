// repositories/orderPaymentsRepository.js
const db = require('../config/db');
const OrderPayment = require('../models/orderPaymentsModel');

class OrderPaymentsRepository {
  static async createOrderPayment(payment) {
    try {
      const query = `
        INSERT INTO order_payments (order_id, payment_method_id, payment_status, payment_date)
        VALUES (?, ?, ?, ?)
      `;
      const [result] = await db.execute(query, [payment.orderId, payment.paymentMethodId, payment.paymentStatus, payment.paymentDate]);
      return { affectedRows: result.affectedRows, insertId: result.insertId };
    } catch (error) {
      throw new Error("Error creating order payment: " + error.message);
    }
  }

  static async getOrderPaymentById(orderId) {
    try {
      const query = "SELECT * FROM order_payments WHERE order_id = ?";
      const [rows] = await db.execute(query, [orderId]);
      return rows.length === 0 ? null : OrderPayment.fromRow(rows[0]);
    } catch (error) {
      throw new Error("Error fetching order payment: " + error.message);
    }
  }

  static async getAllOrderPayments() {
    try {
      const query = "SELECT * FROM order_payments";
      const rows = await db.execute(query);
      return rows.map( OrderPayment.fromRow);
    } catch (error) {
      throw new Error("Error fetching order payments: " + error.message);
    }
  }

  static async updateOrderPayment(payment) {
    try {
      const query = `
        UPDATE order_payments
        SET payment_method_id = ?, payment_status = ?, payment_date = ?
        WHERE order_id = ?
      `;
      const [result] = await db.execute(query, [payment.paymentMethodId, payment.paymentStatus, payment.paymentDate, payment.orderId]);
      return result.affectedRows;
    } catch (error) {
      throw new Error("Error updating order payment: " + error.message);
    }
  }

  static async deleteOrderPayment(orderId) {
    try {
      const query = "DELETE FROM order_payments WHERE order_id = ?";
      const [result] = await db.execute(query, [orderId]);
      return result.affectedRows;
    } catch (error) {
      throw new Error("Error deleting order payment: " + error.message);
    }
  }
}

module.exports = OrderPaymentsRepository;
