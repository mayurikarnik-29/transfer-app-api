'use strict';

var mongoose = require('mongoose'),
  Transactions = mongoose.model('Transactions');
  const { v4: uuidv4 } = require('uuid');

exports.list_all_transfers = function (req, res) {
  Transactions.find({}, function (err, transfer) {
    if (err)
      res.send(err);
    if (transfer)
      res.json(transfer);
    else
      res.json({ message: 'Error while fetching records' })
  });
};

exports.create_a_transfer = function (req, res) {
  req.body.id = uuidv4();
  var new_transfer = new Transactions(req.body);
  new_transfer.save(function (err, transfer) {
    if (err)
      res.send(err);
    if (transfer)
      res.json(transfer);
    else
      res.json({ message: 'Error while creating record' })
  });
};

exports.read_a_transfer = function (req, res) {
  Transactions.findOne({ id: req.params.transactionsId }, function (err, transfer) {
    if (err)
      res.send(err);
    if (transfer)

      res.json(transfer);
    else
      res.json({ message: 'Error while reading record' })
  });
};

exports.update_a_transfer = function (req, res) {
  Transactions.findOneAndUpdate({ id: req.params.transactionsId }, req.body, { new: true }, function (err, transfer) {
    if (err)
      res.send(err);
    if (transfer)
      res.json(transfer);
    else
      res.json({ message: 'Error while updating record' });

  });
};

exports.delete_a_transfer = function (req, res) {
  Transactions.findOneAndDelete({
    id: req.params.transactionsId
  }, function (err, transfer) {
    if (err)
      res.send(err);
    if (transfer)
      res.json({ status: true, message: 'Transaction successfully deleted' });
    else
      res.json({ status:false, message: 'Error while deleting record' });
  });
};
