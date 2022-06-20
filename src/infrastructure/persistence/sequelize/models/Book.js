const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize.config");

const Book = sequelize.define(
  "books",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Book;
