const express = require('express');
const path = require('path');
const api = require('./routes/indexRoutes.js');

const app = express();
const PORT = process.env.port || 3001;

app.use(express.static('public'));

// set middleware to parse JSON and urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());