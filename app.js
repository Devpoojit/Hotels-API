require('dotenv').config(); // load environment variables
const express = require('express'); // import express
const mongoose = require('mongoose'); // import mongoose
const app = express(); // initialize express

const hotelRoutes = require('./routes/hotel'); // import hotel routes
const userRoutes = require('./routes/user'); // import user routes

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
})

app.use(express.json()); // enable parsing JSON data from request body.

// create a route for the app
app.get('/', (req, res) => {
    res.send('Hello World'); // send response
})

app.use('/api/hotels', hotelRoutes); // use hotel routes in the app.

app.use('/api/users', userRoutes); // use user routes in the app.

// make the server listen to requests
app.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});