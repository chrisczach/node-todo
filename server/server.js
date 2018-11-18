const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose')
const {Todo} = require('./models/todo');
const {User} = require('./models/user'); 

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  const todo = new Todo(req.body);
  todo.save()
  .then(
    doc => res.send(doc),
    err => res.status(400).send(err)
  )
});

// app.get('/todos', (req, res) => {

// })

app.listen(port, () => console.log(`started on port ${port}`));
