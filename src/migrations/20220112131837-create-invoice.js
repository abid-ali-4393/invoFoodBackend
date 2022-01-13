"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Invoices", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      invoice_title: {
        type: Sequelize.STRING,
      },
      invoice_attach: {
        type: Sequelize.STRING,
      },
      invoice_number: {
        type: Sequelize.STRING,
      },
      invoice_from_date: {
        type: Sequelize.DATE,
      },
      invoice_to_date: {
        type: Sequelize.DATE,
      },
      invoice_amount: {
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Invoices");
  },
};
