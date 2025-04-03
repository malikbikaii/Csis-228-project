// services/partsService.js
const PartsRepository = require('../Repositories/partsRepository');

class PartsService {
  static async createPart(part) {
    try {
      return await PartsRepository.createPart(part);
    } catch (error) {
      throw new Error("Error creating part: " + error.message);
    }
  }

  static async getPartById(id) {
    try {
      const part = await PartsRepository.getPartById(id);
      if (!part) {
        throw new Error(`Part with ID ${id} not found`);
      }
      return part;
    } catch (error) {
      throw new Error("Error fetching part: " + error.message);
    }
  }

  static async getAllParts() {
    try {
      return await PartsRepository.getAllParts();
    } catch (error) {
      throw new Error("Error fetching parts: " + error.message);
    }
  }

  static async updatePart(part) {
    try {
      const existingPart = await PartsRepository.getPartById(part.partId);
      if (!existingPart) {
        throw new Error(`Part with ID ${part.partId} not found`);
      }
      return await PartsRepository.updatePart(part);
    } catch (error) {
      throw new Error("Error updating part: " + error.message);
    }
  }

  static async deletePart(id) {
    try {
      const existingPart = await PartsRepository.getPartById(id);
      if (!existingPart) {
        throw new Error(`Part with ID ${id} not found`);
      }
      return await PartsRepository.deletePart(id);
    } catch (error) {
      throw new Error("Error deleting part: " + error.message);
    }
  }
}

module.exports = PartsService;
