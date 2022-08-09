const { faker } = require('@faker-js/faker');
const _ = require('lodash');

module.exports = {
  async up(queryInterface, Sequelize) {
    const carList = [];

    for (let i = 0; i < 50; i += 1) {
      carList.push({
        rate: ((Math.floor(Math.random() * 30) + 15) * 10),
        model: faker.vehicle.model(),
        manufacturer: faker.vehicle.manufacturer(),
        seats: (Math.floor(Math.random() * 9) + 2),
        manual: _.sample([true, false]),
        vrm: faker.vehicle.vrm(),
        fuel: faker.vehicle.fuel(),
        image: faker.image.transport(500, 500),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    try {
      const result = await queryInterface.bulkInsert('cars', carList);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cars', null, {});
  },
};
