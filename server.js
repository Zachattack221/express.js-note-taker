const express = require('express');
// const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


// set middleware to parse JSON and urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

// const apiRoutes = 
require('./routes/apiRoutes')(app);
// const htmlRoutes = 
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
  });