// object destructuring
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true },
  (err, client) => {
    if (err) return console.log('Unable to connect to MongoDb server');
    console.log('Connected to MongoDb server');

    //object destructuring
    // var user = { name: 'Daniel', age: 38 };
    // var { name } = user;
    // console.log(name);

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne(
    //   {
    //     text: 'Something to do',
    //     completed: false
    //   },
    //   (err, result) => {
    //     if (err) return console.log('Unable to insert todo', err);
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    // db.collection('Users').insertOne(
    //   {
    //     name: 'Daniela',
    //     age: 1,
    //     location: 'Guayaquil'
    //   },
    //   (err, result) => {
    //     if (err) return console.log('Unable to insert user', err);
    //     console.log(
    //       JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2)
    //     );
    //   }
    // );

    client.close();
  }
);
