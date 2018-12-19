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

    //deleteMany
    // db.collection('Todos')
    //   .deleteMany({ text: 'Walk the dog' })
    //   .then(result => {
    //     console.log(result);
    //   });

    //deleteOne
    // db.collection('Todos')
    //   .deleteOne({ text: 'Walk the cat' })
    //   .then(result => {
    //     console.log(result);
    //   });

    //findOneanddelete
    db.collection('Todos')
      .findOneAndDelete({ completed: false })
      .then(result => {
        console.log(result);
      });

    client.close();
  }
);
