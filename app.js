require('dotenv').config(); // import dotenv and load all the variables from .env file
const express = require('express'); // import express
const mongoose = require('mongoose'); // import mongoose
const app = express(); // initialize express

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
});

const Hotel = require('./models/hotel'); // import Hotel model
// In-file database


app.use(express.json()); // enable parsing JSON data from request body.


// API to get all hotels
app.get('/api/hotels', async (req, res) => {
    const hotels = await Hotel.find();
    res.json(hotels);
});

// API to get a single hotel
app.get('/api/hotels/:id', (req, res) => {
    const id = req.params.id;
    const hotel = hotels.find((hotel) => hotel.id === parseInt(id));
    if (!hotel) {
        res.status(404).send('The hotel with the given ID was not found');
    }
    res.json(hotel);
});

// API to add a new hotel
app.post('/api/hotels', async (req, res) => {
    const hotel = req.body;
    const dbHotel = await Hotel.create(hotel);
    res.json(dbHotel);
});

// create a route for the app
app.get('/', (req, res) => {
    res.send('Hello World'); // send response
})

// make the server listen to requests
app.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});