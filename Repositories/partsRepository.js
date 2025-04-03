// repositories/partsRepository.js
const db = require('../config/db');
const Part = require('../models/partsModel');

class PartsRepository {
  static async createPart(part) {
    try {
      const query = `
        INSERT INTO parts (name, description, price)
        VALUES (?, ?, ?)
      `;
      const [result] = await db.execute(query, [part.name, part.description, part.price]);
      return { affectedRows: result.affectedRows, insertId: result.insertId };
    } catch (error) {
      throw new Error("Error creating part: " + error.message);
    }
  }

  static async getPartById(partId) {
    try {
      const query = "SELECT * FROM parts WHERE part_id = ?";
      const [rows] = await db.execute(query, [partId]);
      return rows.length === 0 ? null : Part.fromRow(rows[0]);
    } catch (error) {
      throw new Error("Error fetching part: " + error.message);
    }
  }

  static async getAllParts() {
    try {
      const query = "SELECT * FROM parts";
      const [rows] = await db.execute(query);
      return rows.map(row => Part.fromRow(row));
    } catch (error) {
      throw new Error("Error fetching parts: " + error.message);
    }
  }

  static async updatePart(part) {
    try {
      const query = `
        UPDATE parts
        SET name = ?, description = ?, price = ?
        WHERE part_id = ?
      `;
      const [result] = await db.execute(query, [part.name, part.description, part.price, part.partId]);
      return result.affectedRows;
    } catch (error) {
      throw new Error("Error updating part: " + error.message);
    }
  }

  static async deletePart(partId) {
    try {
      const query = "DELETE FROM parts WHERE part_id = ?";
      const [result] = await db.execute(query, [partId]);
      return result.affectedRows;
    } catch (error) {
      throw new Error("Error deleting part: " + error.message);
    }
  }
}

module.exports = PartsRepository;
