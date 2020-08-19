// import mongoose odm module
const mongoose = require('mongoose');

// creating the todo schema
const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    deadline: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

// creating model from schema
const Todo = mongoose.model('Todo', todoSchema);

// export the model
module.exports = Todo;
