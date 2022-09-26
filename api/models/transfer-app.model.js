
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  id: {
    type: String,
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