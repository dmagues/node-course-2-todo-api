const { ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');

const userOneId = new ObjectId();
const userTwoId = new ObjectId();

const users = [
  {
    _id: userOneId,
    email: 'dmagues@gmail.com',
    password: 'userOnePass',
    tokens: [
      {
        access: 'auth',
        token: jwt
          .sign({ _id: userOneId._id.toHexString(), acesss: 'auth' }, 'abc123')
          .toString()
      }
    ]
  },
  {
    _id: userTwoId,
    email: 'johyord@hotmail.com',
    password: 'userTwoPass'
  }
];

const todos = [
  { _id: new ObjectId(), text: 'first test todo' },
  {
    _id: new ObjectId(),
    text: 'second test todo',
    completed: true,
    completedAt: 333
  }
];

const populateTodos = done => {
  Todo.deleteMany({})
    .then(() => {
      return Todo.insertMany(todos);
    })
    .then(() => done());
};

const populateUsers = done => {
  User.deleteMany({})
    .then(() => {
      var userOne = new User(users[0]).save();
      var userTwo = new User(users[1]).save();

      return Promise.all([userOne, userTwo]);
    })
    .then(() => done());
};

module.exports = {
  todos,
  populateTodos,
  users,
  populateUsers
};
