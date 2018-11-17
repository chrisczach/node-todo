const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj);

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, client) => {
    if (err) {
      return console.log('unable to connect to mongodb');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
// deleteMany
    db.collection('Todos')
    .deleteMany({text: 'your mom'})
    .then(result=> console.log(result), err => console.log(err))

// deleteOne
db.collection('Todos')
.deleteOne({text: 'names'})
.then(result=> console.log(result), err => console.log(err))

//findOneAndDelete
db.collection('Todos')
.findOneAndDelete({completed: true})
.then(result=> console.log(result), err => console.log(err))


  client.close();
  }
);