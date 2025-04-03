// models/orderPaymentsModel.js
class OrderPayment {
    constructor(orderId, paymentMethodId, paymentStatus, paymentDate) {
      this.orderId = orderId;
      this.paymentMethodId = paymentMethodId;
      this.paymentStatus = paymentStatus;
      this.paymentDate = paymentDate;
    }
  
    static fromRow(row) {
      return new OrderPayment(
        row.order_id,
        row.payment_method_id,
        row.payment_status,
        row.payment_date
      );
    }
  }
  
  module.exports = OrderPayment;
  