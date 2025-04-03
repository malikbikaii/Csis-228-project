const db = require('../config/db');
const ServiceProvider = require('../models/serviceProvidersModel');

class ServiceProvidersRepository {
    static async createServiceProvider(serviceProviderData) {
        try {
            const query = `
                INSERT INTO service_providers (name, email, phone_number, location, service_type)
                VALUES (?, ?, ?, ?, ?)
            `;
            const result = await db.execute(query, [
                serviceProviderData.name,
                serviceProviderData.email,
                serviceProviderData.phoneNumber,
                serviceProviderData.location,
                serviceProviderData.serviceType
            ]);
            return result.insertId;
        } catch (error) {
            throw new Error("Error creating service provider: " + error.message);
        }
    }

    static async getServiceProviders() {
        try {
            const query = "SELECT * FROM service_providers";
            const rows = await db.query(query);
            return rows.map(ServiceProvider.fromRow);
        } catch (error) {
            throw new Error("Error fetching service providers: " + error.message);
        }
    }
}

module.exports = ServiceProvidersRepository;
