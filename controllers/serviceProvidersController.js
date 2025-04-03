const ServiceProvidersService = require('../services/serviceProvidersService');

class ServiceProvidersController {
    static async createServiceProvider(req, res) {
        try {
            const { name, email, phoneNumber, location, serviceType } = req.body;
            const result = await ServiceProvidersService.createServiceProvider({ name, email, phoneNumber, location, serviceType });
            res.status(201).json({ message: "Service provider created successfully", result });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getServiceProviders(req, res) {
        try {
            const providers = await ServiceProvidersService.getServiceProviders();
            res.status(200).json(providers);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = ServiceProvidersController;
