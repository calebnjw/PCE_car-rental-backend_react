const BaseController = require('./baseController.js');

class CarController extends BaseController {
  constructor(model) {
    super(model);
  }

  async getCars(request, response) {
    try {
      // display all cars from db
      const cars = await this.model.findAll({ limit: 20 });

      return response.status(200).json(cars);
    } catch (err) {
      return response.status(401).json({ err: err.message });
    }
  }

  async getCar(request, response) {
    const { id } = request.params;

    try {
      const car = await this.model.findOne({ where: { id } });

      return response.status(200).json(car);
    } catch (err) {
      return response.status(401).json({ err: err.message });
    }
  }
}

module.exports = CarController;
