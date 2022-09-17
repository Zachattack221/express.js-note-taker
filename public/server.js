const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.port || 3001;

require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

app.use(express.static('public'));

// set middleware to parse JSON and urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
  });