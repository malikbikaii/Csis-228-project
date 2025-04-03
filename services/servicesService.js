const ServicesRepository = require('../Repositories/servicesRepository');

class ServicesService {
    static async createService(service) {
        try {
            return await ServicesRepository.createService(service);
        } catch (error) {
            throw new Error("Error creating service: " + error.message);
        }
    }

    static async getServices() {
        try {
            return await ServicesRepository.getServices();
        } catch (error) {
            throw new Error("Error fetching services: " + error.message);
        }
    }
}

module.exports = ServicesService;
