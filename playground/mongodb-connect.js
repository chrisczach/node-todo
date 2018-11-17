const {MongoClient, ObjectID} = require('mongodb');

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

    // db.collection('Todos').insertOne({
    //   text: 'names',
    //   completed: false
    // }, (err, result) =>{
    //   if(err) {return console.log('unable to insert todo', err)};
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne(
    //   {
    //     name: 'bob',
    //     age: 31,
    //     location: 'here'
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log('unable to write User', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    //   }
    // );


    client.close();
  }
);
