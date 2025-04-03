const PaymentMethodsService = require('../services/paymentMethodsService');

class PaymentMethodsController {
    static async createPaymentMethod(req, res) {
        try {
            const { methodName, description } = req.body;
            const result = await PaymentMethodsService.createPaymentMethod({ methodName, description });
            res.status(201).json({ message: "Payment method created successfully", result });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getPaymentMethods(req, res) {
        try {
            const methods = await PaymentMethodsService.getPaymentMethods();
            res.status(200).json(methods);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = PaymentMethodsController;
