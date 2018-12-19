// object destructuring
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true },
  (err, client) => {
    if (err) return console.log('Unable to connect to MongoDb server');
    console.log('Connected to MongoDb server');

    const db = client.db('TodoApp');

    // db.collection('Todos')
    //   .find({ _id: new ObjectID('5c1a7d3ad5a87394ace19bed') })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log('Todos');
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log('Unable to fetch todos');
    //     }
    //   );

    // db.collection('Todos')
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos count: ${count}`);
    //     },
    //     err => {
    //       console.log('Unable to count todos', err);
    //     }
    //   );

    db.collection('Users')
      .find({ name: 'Johanna' })
      .toArray()
      .then(
        docs => {
          console.log('Users');
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log('Unable to fetch users');
        }
      );

    // client.close();
  }
);
