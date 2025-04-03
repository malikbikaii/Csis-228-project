const OrderRepository = require("../Repositories/ordersRepository");
const Order = require("../models/ordersModule");



class OrderService {
  static async createOrder(order) {
    try {
      return await OrderRepository.createOrder(order);
    } catch (error) {
      throw new Error("Error creating order: " + error.message);
    }
  }

  static async getOrderById(id) {
    try {
      const order = await OrderRepository.getOrderById(id);
      if (!order) {
        throw new Error(`Order with ID ${id} not found`);
      }
      return order;
    } catch (error) {
      throw new Error("Error fetching order: " + error.message);
    }
  }

  static async getAllOrders() {
    try {
      return await OrderRepository.getAllOrders();
    } catch (error) {
      throw new Error("Error fetching orders: " + error.message);
    }
  }

  static async updateOrder(order) {
    try {
      // Optionally, check if the order exists first
      const existingOrder = await OrderRepository.getOrderById(order.orderId);
      if (!existingOrder) {
        throw new Error(`Order with ID ${order.orderId} not found`);
      }
      return await OrderRepository.updateOrder(order);
    } catch (error) {
      throw new Error("Error updating order: " + error.message);
    }
  }

  static async deleteOrder(id) {
    try {
      // Optionally, check if the order exists first
      const existingOrder = await OrderRepository.getOrderById(id);
      if (!existingOrder) {
        throw new Error(`Order with ID ${id} not found`);
      }
      return await OrderRepository.deleteOrder(id);
    } catch (error) {
      throw new Error("Error deleting order: " + error.message);
    }
  }
}

module.exports = OrderService;
