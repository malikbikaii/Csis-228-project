class Service {
    constructor(serviceId, name, description, price) {
        this.serviceId = serviceId;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    static fromRow(row) {
        return new Service(
            row.service_id,
            row.name,
            row.description,
            row.price
        );
    }
}

module.exports = Service;
