// controllers/userController.js
const UserService = require('../services/userService');
const User = require('../models/usersModel');

class UserController {
  static async createUser(req, res) {
    try {
      const { name, email, phoneNumber, address } = req.body;
      const result = await UserService.createUser({ name, email, phoneNumber, address });
      res.status(201).json({ message: "User created successfully", result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email, phoneNumber, address } = req.body;
      const user =new User( id, name, email, phoneNumber, address);
      const result = await UserService.updateUser(user);
      res.status(200).json({ message: "User updated successfully", result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const result = await UserService.deleteUser(id);
      res.status(200).json({ message: "User deleted successfully", result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = UserController;
