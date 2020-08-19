// import express
const express = require('express');

// setting port
const port = 8000;

// import mongodb  configuration
const db = require('./config/mongoose');

const todo = require('./models/todo');

// start the express server
const app = express();

// setting path to assets directory
app.use(express.static('./assets'));

// to parse form data
app.use(express.urlencoded({ extended: true }));

// setting view engine as ejs and setting view directory
app.set('view engine', 'ejs');
app.set('views', './views');

// including routes
app.use('/', require('./routes'));

// listen on the port
app.listen(port, function (err) {
  if (err) {
    console.log('error:', err);
    console.log(`Error in running the server:${err}`);
  }

  console.log(`Server is running on port:${port}`);
});
