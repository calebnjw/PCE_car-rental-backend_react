module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'bookings',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        car_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'cars',
            key: 'id',
          },
        },
        start_date: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        end_date: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        email: {
          type: Sequelize.STRING,
        },
        first_name: {
          type: Sequelize.STRING,
        },
        last_name: {
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
    await queryInterface.dropTable('bookings');
  },
};
