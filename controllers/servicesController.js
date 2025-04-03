const ServicesService = require('../services/servicesService');

class ServicesController {
    static async createService(req, res) {
        try {
            const { name, description, price } = req.body;
            const result = await ServicesService.createService({ name, description, price });
            res.status(201).json({ message: "Service created successfully", result });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getServices(req, res) {
        try {
            const services = await ServicesService.getServices();
            res.status(200).json(services);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = ServicesController;
