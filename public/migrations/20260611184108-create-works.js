'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('works', {
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
      title: {
        type: Sequelize.STRING,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      remote: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      price: {
        type: Sequelize.REAL,
        allowNull: true
      },
      discount: {
        type: Sequelize.SMALLINT,
        allowNull: true
      },
      per: {
        type: Sequelize.STRING,
        allowNull: true
      },
      details: {
        type: Sequelize.STRING,
        allowNull: true
      },
      availability: {
        type: Sequelize.STRING,
        allowNull: true
      },
      hours: {
        type: Sequelize.STRING,
        allowNull: true
      },
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      district: {
        type: Sequelize.STRING,
        allowNull: true
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      socialmedia: {
        type: Sequelize.STRING,
        allowNull: true
      },
      checklist: {
        type: Sequelize.STRING,
        allowNull: true
      },
      banner: {
        type: Sequelize.STRING,
        allowNull: true
      },
      standby: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('works');
  }
};