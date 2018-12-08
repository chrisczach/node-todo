const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
  email: {
    required: true,
    trim: true,
    type: String,
    minlength: 4,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [
    {
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = { User };
