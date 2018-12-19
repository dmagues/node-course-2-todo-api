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
    //   .findOneAndUpdate(
    //     { _id: new ObjectID('5c1aafea574be0f59a6ec6ef') },
    //     { $set: { completed: true } },
    //     {
    //       returnOriginal: true
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection('Users')
      .findOneAndUpdate(
        { _id: new ObjectID('5c1a77ab22f4590b5c83ad78') },
        { $set: { name: 'Daniel Alfonso' }, $inc: { age: 1 } },
        {
          returnOriginal: true
        }
      )
      .then(result => {
        console.log(result);
      });

    client.close();
  }
);
