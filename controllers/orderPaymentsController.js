// controllers/orderPaymentsController.js
const OrderPaymentsService = require('../services/orderPaymentsService');

class OrderPaymentsController {
  static async createOrderPayment(req, res) {
    try {
      const { orderId, paymentMethodId, paymentStatus, paymentDate } = req.body;
      const result = await OrderPaymentsService.createOrderPayment({ orderId, paymentMethodId, paymentStatus, paymentDate });
      res.status(201).json({ message: "Order payment created successfully", result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getOrderPaymentById(req, res) {
    try {
      const { id } = req.params;
      const payment = await OrderPaymentsService.getOrderPaymentById(id);
      res.status(200).json(payment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getAllOrderPayments(req, res) {
    try {
      const payments = await OrderPaymentsService.getAllOrderPayments();
      res.status(200).json(payments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateOrderPayment(req, res) {
    try {
      const { id } = req.params;
      const { paymentMethodId, paymentStatus, paymentDate } = req.body;
      const payment = { orderId: id, paymentMethodId, paymentStatus, paymentDate };
      const result = await OrderPaymentsService.updateOrderPayment(payment);
      res.status(200).json({ message: "Order payment updated successfully", result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteOrderPayment(req, res) {
    try {
      const { id } = req.params;
      const result = await OrderPaymentsService.deleteOrderPayment(id);
      res.status(200).json({ message: "Order payment deleted successfully", result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = OrderPaymentsController;
