// repositories/userRepository.js
const db = require('../config/db');
const User = require('../models/usersModel');

class UserRepository {
  // Create a new user
  static async createUser(userData) {
    try {
      const query = `
        INSERT INTO users (name, email, phone_number, address)
        VALUES (?, ?, ?, ?)
      `;
      const result = await db.execute(query, [
        userData.name,
        userData.email,
        userData.phoneNumber,
        userData.address
      ]);

      // Convert BigInt to string if necessary
      return {
        affectedRows: result.affectedRows,
        insertId: result.insertId.toString() // Convert BigInt to string
      };
    } catch (error) {
      throw new Error("Error creating user: " + error.message);
    }
  }

  // Get a user by ID
  static async getUserById(userId) {
    try {
      const query = "SELECT * FROM users WHERE user_id = ?";
      const rows = await db.query(query, [userId]);
      return rows.length === 0 ? null : User.fromRow(rows[0]);
    } catch (error) {
      throw new Error("Error fetching user: " + error.message);
    }
  }

  // Get all users
  static async getAllUsers() {
    try {
      const query = "SELECT * FROM users";
      const rows = await db.query(query);
      return rows.map(User.fromRow);
    } catch (error) {
      throw new Error("Error fetching users: " + error.message);
    }
  }

  // Update a user
  static async updateUser(userData) {
    try {
      const query = `
        UPDATE users
        SET name = ?, email = ?, phone_number = ?, address = ?
        WHERE user_id = ?
      `;
      const result = await db.query(query, [
        userData.name,
        userData.email,
        userData.phoneNumber,
        userData.address,
        userData.userId
      ]);

      // Ensure any BigInt (affectedRows, insertId) are serialized as strings
      return {
        affectedRows: result.affectedRows,
        insertId: result.insertId ? result.insertId.toString() : null // Convert to string if BigInt
      };
    } catch (error) {
      throw new Error("Error updating user: " + error.message);
    }
  }

  // Delete a user by ID
  static async deleteUser(userId) {
    try {
      const query = "DELETE FROM users WHERE user_id = ?";
      const result = await db.query(query, [userId]);
      return result.affectedRows;
    } catch (error) {
      throw new Error("Error deleting user: " + error.message);
    }
  }
}

module.exports = UserRepository;
