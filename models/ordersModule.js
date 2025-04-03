

// models/orderModel.js
class Order {
    constructor(orderId, userId, orderDate, status) {
      this.orderId = orderId;
      this.userId = userId;
      this.orderDate = orderDate;
      this.status = status;
    }
  
    static fromRow(row) {
      return new Order(
        row.order_id,
        row.user_id,
        row.order_date,
        row.status
      );
    }
  }
  
  module.exports = Order;
  
