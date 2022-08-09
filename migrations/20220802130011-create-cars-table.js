module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'cars',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        rate: {
          type: Sequelize.DECIMAL(10, 2),
        },
        model: {
          type: Sequelize.STRING,
        },
        manufacturer: {
          type: Sequelize.STRING,
        },
        seats: {
          type: Sequelize.INTEGER,
        },
        manual: {
          type: Sequelize.BOOLEAN,
        },
        vrm: {
          type: Sequelize.STRING,
        },
        fuel: {
          type: Sequelize.STRING,
        },
        image: {
          type: Sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cars');
  },
};
