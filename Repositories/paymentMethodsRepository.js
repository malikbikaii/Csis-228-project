const db = require('../config/db');
const PaymentMethod = require('../models/paymentMethodsModel');

class PaymentMethodsRepository {
    static async createPaymentMethod(paymentMethodData) {
        try {
            const query = `
                INSERT INTO payment_methods (method_name, description)
                VALUES (?, ?)
            `;
            const result = await db.execute(query, [
                paymentMethodData.methodName,
                paymentMethodData.description
            ]);
            return result.insertId;
        } catch (error) {
            throw new Error("Error creating payment method: " + error.message);
        }
    }

    static async getPaymentMethods() {
        try {
            const query = "SELECT * FROM payment_methods";
            const rows = await db.query(query);
            return rows.map(PaymentMethod.fromRow);
        } catch (error) {
            throw new Error("Error fetching payment methods: " + error.message);
        }
    }
}

module.exports = PaymentMethodsRepository;
