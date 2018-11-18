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
    //findOneAndUpdate

    // db.collection('Todos').findOneAndUpdate(
    //   {
    //     _id: new ObjectID('5bef7ce475b7dab5d6de1dc0')
    //   },
    //   {
    //     $set: { completed: true }
    //   },
    //   { returnOriginal: false }
    // )
    // .then(result => console.log(result));

    db.collection('Users').findOneAndUpdate(
      {
        _id: new ObjectID('5bee3f278ed6432bf899c257')
      },
      {
        $inc: { age: 1 }
      },
      { returnOriginal: false }
    )
    .then(result => console.log(result));


    client.close();
  }
);
