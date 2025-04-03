// controllers/partsController.js
const PartsService = require('../services/partsService');

class PartsController {
  static async createPart(req, res) {
    try {
      const { name, description, price } = req.body;
      const result = await PartsService.createPart({ name, description, price });
      res.status(201).json({ message: "Part created successfully", result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getPartById(req, res) {
    try {
      const { id } = req.params;
      const part = await PartsService.getPartById(id);
      res.status(200).json(part);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getAllParts(req, res) {
    try {
      const parts = await PartsService.getAllParts();
      res.status(200).json(parts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updatePart(req, res) {
    try {
      const { id } = req.params;
      const { name, description, price } = req.body;
      const part = { partId: id, name, description, price };
      const result = await PartsService.updatePart(part);
      res.status(200).json({ message: "Part updated successfully", result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deletePart(req, res) {
    try {
      const { id } = req.params;
      const result = await PartsService.deletePart(id);
      res.status(200).json({ message: "Part deleted successfully", result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = PartsController;
