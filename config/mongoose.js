// import mongoose odm module
const mongoose = require('mongoose');

// creating connection to running mongoDB server instance
// setting conditions in mogoose constructor to adopt new syntax and avoid deprecation warning
mongoose.connect('mongodb://localhost/todo_list_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// getting the db instance from the mongoose connection
const db = mongoose.connection;

// binding error to console in case of db conncection fails.
db.on('error', console.error.bind(console, 'connection error:'));

// starting the db connection
db.once('open', function () {
  console.log('connected successfully to todo_list_db');
});

// export the db connection
module.exports = db;
