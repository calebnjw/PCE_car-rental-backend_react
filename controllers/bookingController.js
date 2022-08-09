const BaseController = require('./baseController.js');

class BookingController extends BaseController {
  constructor(model) {
    super(model);
  }

  async getBookings(req, res) {
    const { email } = req.body;

    try {
      // search for bookings on db using email address
      const bookings = await this.model.findAll({ where: { email } });

      return res.status(200).json({ bookings });
    } catch (err) {
      return res.status(401).json({ err: err.message });
    }
  }

  async getBooking(req, res) {
    const { id } = req.params;

    try {
      // search for bookings on db using id
      const booking = await this.model.findOne({ where: { id } });

      return res.status(200).json({ booking });
    } catch (err) {
      return res.status(401).json({ err: err.message });
    }
  }

  async newBooking(req, res) {
    const {
      carId, startDate, endDate, email, firstName, lastName,
    } = req.body;

    try {
      // search for bookings on db using id
      await this.model.create({
        carId, startDate, endDate, email, firstName, lastName,
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(401).json({ err: err.message });
    }
  }

  async deleteBooking(req, res) {
    const { id } = req.params;

    try {
      // destroy booking on db using id
      await this.model.destroy({ where: { id } });

      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(401).json({ err: err.message });
    }
  }
}

module.exports = BookingController;
