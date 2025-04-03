class OrderPart {
    constructor(orderId, partId, quantity) {
        this.orderId = orderId;
        this.partId = partId;
        this.quantity = quantity;
    }

    static fromRow(row) {
        return new OrderPart(
            row.order_id,
            row.part_id,
            row.quantity
        );
    }
}

module.exports = OrderPart;
