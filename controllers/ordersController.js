const Order = require("../models/ordersModule");
const OrderService = require("../services/ordersServices");


class OrderController {
  // Create a new order
  static async createOrder(req, res) {
    try {
      const { userId, orderDate, status } = req.body;
      const result = await OrderService.createOrder({ userId, orderDate, status });
      res.status(201).json({ message: "Order created successfully", result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get an order by ID
  static async getOrderById(req, res) {
    try {
      const { id } = req.params;
      const order = await OrderService.getOrderById(id);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get all orders
  static async getAllOrders(req, res) {
    try {
      const orders = await OrderService.getAllOrders();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Update an order
  static async updateOrder(req, res) {
    try {
      const { id } = req.params;
      const { userId, orderDate, status } = req.body;
      const order = { orderId: id, userId, orderDate, status };
      const result = await OrderService.updateOrder(order);
      res.status(200).json({ message: "Order updated successfully", result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete an order
  static async deleteOrder(req, res) {
    try {
      const { id } = req.params;
      const result = await OrderService.deleteOrder(id);
      res.status(200).json({ message: "Order deleted successfully", result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = OrderController;
