// import todo model
const Todo = require('../models/todo');

// controller action to display all added tasks
module.exports.home = function (req, res) {
  Todo.find({}, (err, todos) => {
    if (err) {
      console.log('error in creating');
      return res.redirect('back');
    }

    return res.render('index', {
      title: 'home',
      todos: todos,
    });
  });
};

// controller action to create new task
module.exports.addTask = (req, res) => {
  console.log(req.body);

  Todo.create(req.body, (err, todo) => {
    if (err) {
      console.log('error in creating');
      return res.redirect('back');
    }

    console.log('task is added', todo);
    return res.redirect('back');
  });
};

// controller action to delete a task
module.exports.deleteTask = (req, res) => {
  Todo.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      console.log('error in deleting');
      return res.redirect('back');
    }

    console.log('task is deleted');
    return res.redirect('back');
  });
};

// controller action to clear list items(delete all added tasks)
module.exports.clearAll = (req, res) => {
  Todo.deleteMany({}, (err) => {
    if (err) {
      console.log('error in deleting');
      return res.redirect('back');
    }

    console.log(' all task is deleted');
    return res.redirect('back');
  });
};
