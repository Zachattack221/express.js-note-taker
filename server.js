const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// pathing for routing folder
const apiRoutes = require('/routes/apiRoutes.js');
const htmlRoutes = require('routes/htmlRoutes.js');

// set middleware to parse JSON and urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
  });
