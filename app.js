const express = require('express'); // import express

const app = express(); // initialize express

// In-file database
const hotels = [
    {
        id: 1,
        name: 'Hotel 1',
        city: 'City 1',
        price: 1000,
        rooms: 1,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        name: 'Hotel 2',
        city: 'City 2',
        price: 2000,
        rooms: 2,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 3,
        name: 'Hotel 3',
        city: 'City 3',
        price: 3000,
        rooms: 3,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 4,
        name: 'Hotel 4',
        city: 'City 4',
        price: 4000,
        rooms: 4,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 5,
        name: 'Hotel 5',
        city: 'City 5',
        price: 5000,
        rooms: 5,
        image: 'https://via.placeholder.com/150'
    }
];

app.use(express.json()); // enable parsing JSON data from request body.


// API to get all hotels
app.get('/api/hotels', (req, res) => {
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
app.post('/api/hotels', (req, res) => {
    const hotel = req.body;
    hotel.id = hotels.length + 1;
    hotels.push(hotel);
    res.json(hotel);
});

// create a route for the app
app.get('/', (req, res) => {
    res.send('Hello World'); // send response
})

// make the server listen to requests
app.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});