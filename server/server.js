const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

const newTodo = new Todo({
  text: 'cook dinner'
});

newTodo.save().then(
  doc => {
    console.log('saved todo: ', doc);
  },
  e => {
    console.log('unable to save');
  }
);

const anotherTodo = new Todo({
  text: 'blobs',
  completed: true,
  completedAt: 1000000
});

anotherTodo.save().then(
  doc => {
    console.log('saved todo: ', doc);
  },
  e => {
    console.log('unable to save');
  }
);
