class ServiceProvider {
    constructor(providerId, name, email, phoneNumber, location, serviceType) {
        this.providerId = providerId;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.location = location;
        this.serviceType = serviceType;
    }

    static fromRow(row) {
        return new ServiceProvider(
            row.provider_id,
            row.name,
            row.email,
            row.phone_number,
            row.location,
            row.service_type
        );
    }
}

module.exports = ServiceProvider;
