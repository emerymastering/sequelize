"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("countries", [
      {
        name: "uk",
        capital: "London",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "usa",
        capital: "Washington DC",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("countries", null, {});
  },
};
