const express = require('express');

const router = express.Router();

class BookingRouter {
  constructor(controller) {
    this.controller = controller;
  }

  router() {
    router.get('/:id', this.controller.getBooking.bind(this.controller));

    router.post('/', this.controller.getBookings.bind(this.controller));
    router.post('/new', this.controller.newBooking.bind(this.controller));

    router.delete('/:id', this.controller.deleteBooking.bind(this.controller));

    return router;
  }
}

module.exports = BookingRouter;
