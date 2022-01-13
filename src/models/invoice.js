"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Invoice.init(
    {
      invoice_title: DataTypes.STRING,
      invoice_number: DataTypes.STRING,
      invoice_attach: DataTypes.STRING,
      invoice_from_date: DataTypes.DATE,
      invoice_to_date: DataTypes.DATE,
      invoice_amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Invoice",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Invoice;
};
