const express = require('express');

const router = express.Router();

class CarRouter {
  constructor(controller) {
    this.controller = controller;
  }

  router() {
    router.get('/', this.controller.getCars.bind(this.controller));
    // router.get('/:id', this.controller.getCar.bind(this.controller));

    return router;
  }
}

module.exports = CarRouter;
