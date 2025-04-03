// models/partsModel.js
class Part {
    constructor(partId, name, description, price) {
      this.partId = partId;
      this.name = name;
      this.description = description;
      this.price = price;
    }
  
    static fromRow(row) {
      return new Part(
        row.part_id,
        row.name,
        row.description,
        row.price
      );
    }
  }
  
  module.exports = Part;
  