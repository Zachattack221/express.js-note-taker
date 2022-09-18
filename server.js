const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;


// set middleware to parse JSON and urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// sets routing via routes folder
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
  });