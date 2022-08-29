"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("countries", [
      {
        name: "China",
        capital: "Beijing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Japan",
        capital: "Tokyo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("countries", null, {});
  },
};
