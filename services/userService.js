// services/userService.js
const UserRepository = require('../Repositories/userRepository');
const User = require("../models/usersModel");

class UserService {
  static async createUser(user) {
    try {
      return await UserRepository.createUser(user);
    } catch (error) {
      throw new Error("Error creating user: " + error.message);
    }
  }

  static async getUserById(id) {
    try {
      const user = await UserRepository.getUserById(id);
      if (!user) {
        throw new Error(`User with ID ${id} not found`);
      }
      return user;
    } catch (error) {
      throw new Error("Error fetching user: " + error.message);
    }
  }

  static async getAllUsers() {
    try {
      return await UserRepository.getAllUsers();
    } catch (error) {
      throw new Error("Error fetching users: " + error.message);
    }
  }

  static async updateUser(user) {
    try {
      const existingUser = await UserRepository.getUserById(user.userId);
      if (!existingUser) {
        throw new Error(`User with ID ${user.userId} not found`);
      }
      return await UserRepository.updateUser(user);
    } catch (error) {
      throw new Error("Error updating user: " + error.message);
    }
  }

  static async deleteUser(id) {
    try {
      const existingUser = await UserRepository.getUserById(id);
      if (!existingUser) {
        throw new Error(`User with ID ${id} not found`);
      }
      return await UserRepository.deleteUser(id);
    } catch (error) {
      throw new Error("Error deleting user: " + error.message);
    }
  }
}

module.exports = UserService;
