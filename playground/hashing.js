const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword =
  '$2a$10$BhY8NgJ8x77Grwec2Jx14uVVvR7QlhGlhA/CGUYzTg1Caogm85nNO';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decode', decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`HASH: ${hash}`);

// var data = {
//   id: 4
// };

// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // hack
// token.data.id = 5;
// token.data.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (token.hash === resultHash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }
