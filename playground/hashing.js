const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

// const message = 'I am user A';
// const hash = SHA256(message).toString();

// console.log(message);
// console.log(hash);

const data = {
  id: 4
};

// const token = {
//   data,
//   hash: SHA256(JSON>stringify(data).toString())
// }

const token = jwt.sign(data, 'secret');
console.log(token);
const decoded = jwt.verify(token, 'secret');

console.log(decoded);