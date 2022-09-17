const express = require('express');
const path = require('path');
const api = require('./routes/apiRoutes.js');

const app = express();
const PORT = process.env.port || 3001;

app.use(express.static('public'));

// set middleware to parse JSON and urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
  });