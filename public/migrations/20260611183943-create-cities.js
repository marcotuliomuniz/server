'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      state_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'states', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'works', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    await queryInterface.dropTable('cities');
  }
};