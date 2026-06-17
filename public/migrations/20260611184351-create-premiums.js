'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('premiums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_uid: {
        type: Sequelize.STRING,
        allowNull: true
      },
      credit: {
        type: Sequelize.SMALLINT,
        allowNull: true
      },
      expiration: {
        type: Sequelize.DATE,
        allowNull: true
      },
      bank: {
        type: Sequelize.SMALLINT,
        allowNull: true
      },
      operation: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('premiums');
  }
};