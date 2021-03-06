require('./config/config');
console.log('ENV*****', process.env.MONGODB_URI);
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const _ = require('lodash');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
const { authenticate } = require('./middleware/authenticate');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  const todo = new Todo(req.body);
  todo.save().then(doc => res.send(doc), err => res.status(400).send(err));
});

app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

app.get('/todos', (req, res) => {
  Todo.find().then(
    todos => res.send({ todos }),
    err => res.status(400).send(err)
  );
});

app.get('/todos/:id', (req, res) => {
  Todo.findById(req.params.id).then(
    todo => (todo ? res.send({ todo }) : res.status(404).send()),
    err => res.status(400).send(err)
  );
});

app.delete('/todos/:id', (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(todo => (todo ? res.send({ todo }) : res.status(404).send()))
    .catch(e => res.status(400).send(e));
});

app.patch('/todos/:id', (req, res) => {
  const id = req.params.id;
  const body = _.pick(req.body, ['text', 'completed']);
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  if (_.isBoolean(body.completed) && body.completed) {
    body.completed = true;
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(todo => {
      if (!todo) return res.status(404).send();
      res.send({ todo });
    })
    .catch(e => res.status(400).send());
});

app.post('/users', (req, res) => {
  const body = _.pick(req.body, ['email', 'password']);
  const user = new User(body);
  user
    .save()
    .then(() => {
      return user.generateAuthToken();
    })
    .then(token => res.header('x-auth', token).send(user))
    .catch(err => res.status(400).send(err));
});

app.listen(port, () => console.log(`started on port ${port}`));

module.exports = { app };
