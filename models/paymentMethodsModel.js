class PaymentMethod {
    constructor(paymentMethodId, methodName, description) {
        this.paymentMethodId = paymentMethodId;
        this.methodName = methodName;
        this.description = description;
    }

    static fromRow(row) {
        return new PaymentMethod(
            row.payment_method_id,
            row.method_name,
            row.description
        );
    }
}

module.exports = PaymentMethod;
