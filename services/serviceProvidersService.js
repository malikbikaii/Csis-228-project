const ServiceProvidersRepository = require('../Repositories/serviceProvidersRepository');

class ServiceProvidersService {
    static async createServiceProvider(serviceProvider) {
        try {
            return await ServiceProvidersRepository.createServiceProvider(serviceProvider);
        } catch (error) {
            throw new Error("Error creating service provider: " + error.message);
        }
    }

    static async getServiceProviders() {
        try {
            return await ServiceProvidersRepository.getServiceProviders();
        } catch (error) {
            throw new Error("Error fetching service providers: " + error.message);
        }
    }
}

module.exports = ServiceProvidersService;
