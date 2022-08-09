const BaseController = require('./baseController.js');

class CarController extends BaseController {
  constructor(model) {
    super(model);
  }

  async getCars(request, response) {
    try {
      console.log('getting cars');
      // display all cars from db
      const cars = await this.model.findAll({ limit: 20 });

      console.log('got cars');
      return response.status(200).json(cars);
    } catch (err) {
      return response.status(401).json({ err: err.message });
    }
  }

  // async getCar(request, response) {
  //   console.log(request.params);
  //   const { id } = request.params;

  //   try {
  //     console.log('getting car #', id);
  //     // display all cars from db
  //     const car = await this.model.findOne({ where: { id } });

  //     console.log('got the car');
  //     return response.status(200).json(car);
  //   } catch (err) {
  //     return response.status(401).json({ err: err.message });
  //   }
  // }
}

module.exports = CarController;
