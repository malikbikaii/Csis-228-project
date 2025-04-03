// models/usersModel.js
class User {
    constructor(userId, name, email, phoneNumber, address) {
      this.userId = userId;
      this.name = name;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.address = address;
    }
  
    static fromRow(row) {
      return new User(
        row.user_id,
        row.name,
        row.email,
        row.phone_number,
        row.address
      );
    }
  }
  
  module.exports = User;
  