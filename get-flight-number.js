'use strict';

const axios = require('axios');


module.exports = function getFlightNumber() {
  return axios.get('https://api.spacexdata.com/v3/launches/latest')
    .then(response => response.data.flight_number);
};
