const cookieParser = require('cookie-parser');
const express = require('express');

const cors = require('cors');
const methodOverride = require('method-override');

require('dotenv').config();

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

const db = require('./models/index.js');

const CarController = require('./controllers/carController.js');
const BookingController = require('./controllers/bookingController.js');

const carController = new CarController(db.Car, db);
const bookingController = new BookingController(db.Car, db);

const CarRouter = require('./routers/carRouter.js');
const BookingRouter = require('./routers/bookingRouter.js');

const carRouter = new CarRouter(carController).router();
const bookingRouter = new BookingRouter(bookingController).router();

// Initialise Express instance
const app = express();
// Set CORS headers
app.use(cors({
  credentials: true,
  origin: FRONTEND_URL,
}));
// Set the Express view engine to expect EJS templates
app.set('view engine', 'ejs');
// Bind cookie parser middleware to parse cookies in requests
app.use(cookieParser());
// Bind Express middleware to parse request bodies for POST requests
app.use(express.urlencoded({ extended: false }));
// Bind Express middleware to parse JSON request bodies
app.use(express.json());
// Bind method override middleware to parse PUT and DELETE requests sent as POST requests
app.use(methodOverride('_method'));
// Expose the files stored in the public folder
app.use(express.static('public'));

// Bind route definitions to the Express application
app.use('/cars', carRouter);
app.use('/bookings', bookingRouter);

// Set Express to listen on the given port
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT} using HTTP`);
});
