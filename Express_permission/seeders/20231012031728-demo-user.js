"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];
    for (let i = 1; i < 50; i++) {
      data.push({
        name: `User ${i + 1}`,
        email: `user ${i + 1}@gmail.com`,
        password: `123456`,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert("users", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
