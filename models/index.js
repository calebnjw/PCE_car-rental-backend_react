const { Sequelize } = require('sequelize');
const allConfig = require('../config/config.json');

const initCarModel = require('./car.js');
const initBookingModel = require('./booking.js');

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.Car = initCarModel(sequelize, Sequelize.DataTypes);
db.Booking = initBookingModel(sequelize, Sequelize.DataTypes);

db.Car.hasMany(db.Booking);
db.Booking.belongsTo(db.Car);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
