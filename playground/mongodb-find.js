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

    // db.collection('Todos')
    //   .find({
    //     _id: new ObjectID('5bee3df106c0722b941a7528')})
    //   .toArray()
    //   .then(docs => console.log(docs), err => console.log(err));

    // client.close();

    // db.collection('Todos')
    // .find()
    // .count()
    // .then(count => console.log(`Todo Count: ${count}`), err => console.log(err));

    db.collection('Users')
    .find({name: 'bob'})
    .toArray()
    .then(docs => console.log(JSON.stringify(docs, undefined, 2)), err => console.log(err));

  client.close();
  }
);
