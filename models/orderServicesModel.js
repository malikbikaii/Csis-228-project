class OrderService {
    constructor(orderId, serviceId, providerId) {
        this.orderId = orderId;
        this.serviceId = serviceId;
        this.providerId = providerId;
    }

    static fromRow(row) {
        return new OrderService(
            row.order_id,
            row.service_id,
            row.provider_id
        );
    }
}

module.exports = OrderService;
