const PaymentMethodsRepository = require('../Repositories/paymentMethodsRepository');

class PaymentMethodsService {
    static async createPaymentMethod(paymentMethod) {
        try {
            return await PaymentMethodsRepository.createPaymentMethod(paymentMethod);
        } catch (error) {
            throw new Error("Error creating payment method: " + error.message);
        }
    }

    static async getPaymentMethods() {
        try {
            return await PaymentMethodsRepository.getPaymentMethods();
        } catch (error) {
            throw new Error("Error fetching payment methods: " + error.message);
        }
    }
}

module.exports = PaymentMethodsService;
