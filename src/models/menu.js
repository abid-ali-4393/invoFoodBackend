"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Menu.init(
    {
      menu_title: DataTypes.STRING,
      menu_attach: DataTypes.STRING,
      to_date: DataTypes.DATE,
      from_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Menu",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Menu;
};
