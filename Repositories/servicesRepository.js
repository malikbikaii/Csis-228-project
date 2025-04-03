const db = require('../config/db');
const Service = require('../models/servicesModel');

class ServicesRepository {
    static async createService(serviceData) {
        try {
            const query = `
                INSERT INTO services (name, description, price)
                VALUES (?, ?, ?)
            `;
            const result = await db.execute(query, [
                serviceData.name,
                serviceData.description,
                serviceData.price
            ]);
            return result.insertId;
        } catch (error) {
            throw new Error("Error creating service: " + error.message);
        }
    }

    static async getServices() {
        try {
            const query = "SELECT * FROM services";
            const rows = await db.query(query);
            return rows.map(Service.fromRow);
        } catch (error) {
            throw new Error("Error fetching services: " + error.message);
        }
    }
}

module.exports = ServicesRepository;
