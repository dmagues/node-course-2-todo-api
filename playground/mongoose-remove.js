const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

const id = '5c24d9a03c2ac40d54e78509';
// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findByIdAndDelete(id, (err, todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove(id).then(doc => {
  console.log(doc);
});
