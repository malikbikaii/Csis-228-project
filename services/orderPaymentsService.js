// services/orderPaymentsService.js
const OrderPaymentsRepository = require('../Repositories/orderPaymentsRepository');

class OrderPaymentsService {
  static async createOrderPayment(payment) {
    try {
      return await OrderPaymentsRepository.createOrderPayment(payment);
    } catch (error) {
      throw new Error("Error creating order payment: " + error.message);
    }
  }

  static async getOrderPaymentById(id) {
    try {
      const payment = await OrderPaymentsRepository.getOrderPaymentById(id);
      if (!payment) {
        throw new Error(`Order payment with ID ${id} not found`);
      }
      return payment;
    } catch (error) {
      throw new Error("Error fetching order payment: " + error.message);
    }
  }

  static async getAllOrderPayments() {
    try {
      return await OrderPaymentsRepository.getAllOrderPayments();
    } catch (error) {
      throw new Error("Error fetching order payments: " + error.message);
    }
  }

  static async updateOrderPayment(payment) {
    try {
      const existingPayment = await OrderPaymentsRepository.getOrderPaymentById(payment.orderId);
      if (!existingPayment) {
        throw new Error(`Order payment with ID ${payment.orderId} not found`);
      }
      return await OrderPaymentsRepository.updateOrderPayment(payment);
    } catch (error) {
      throw new Error("Error updating order payment: " + error.message);
    }
  }

  static async deleteOrderPayment(id) {
    try {
      const existingPayment = await OrderPaymentsRepository.getOrderPaymentById(id);
      if (!existingPayment) {
        throw new Error(`Order payment with ID ${id} not found`);
      }
      return await OrderPaymentsRepository.deleteOrderPayment(id);
    } catch (error) {
      throw new Error("Error deleting order payment: " + error.message);
    }
  }
}

module.exports = OrderPaymentsService;
