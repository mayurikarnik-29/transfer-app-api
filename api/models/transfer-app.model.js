
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

var TransactionSchema = new Schema({
  id: {
    type: String,
    default: uuidv4(),
    immutable: true
  },
  account_holder: {
    type: String,
  },
  IBAN: {
    type: String
  },
  amount: {
    type: String
  },
  date: {
    type: Date,
    default: new Date()
  },
  note: {
    type: String
  }
});

module.exports = mongoose.model('Transactions', TransactionSchema);