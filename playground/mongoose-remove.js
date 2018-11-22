const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove
// Todo.remove({})
// .then(result =>{
//   console.log(result)
// })

//Todo.findOneAndRemove

Todo.findByIdAndRemove('5bf65201f2a60fd8211c3d42')
.then(todo=> console.log(todo))

