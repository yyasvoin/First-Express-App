'use strict';


const express = require('express');
const getFlightNumber = require('./get-flight-number');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/flight-number', (req, res) => {
  getFlightNumber().then((flightNumber) => {
    res.send(`The latest flight number ${flightNumber}.`);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
