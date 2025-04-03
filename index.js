const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const orderRoutes=require('./routes/ordersRoutes');
const orderPaymentsRoutes = require('./routes/orderPaymentsRoutes'); // Import orderPayments routes
require('dotenv').config();

const app = express();

// Enable CORS for all requests
app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Register routes
app.use('/api/user', userRoutes); // User routes
app.use('/api/order',orderRoutes);
app.use('/api/order-payments', orderPaymentsRoutes); // Order Payments routes

// Set the port to either the value in the .env file or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
