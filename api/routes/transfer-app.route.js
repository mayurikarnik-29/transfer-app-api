'use strict';
module.exports = function (app) {
  var transfer = require('../controllers/transfer-app.controller');

  // Routes
  app.route('/transactions')
    .get(transfer.list_all_transfers)
    .post(transfer.create_a_transfer);

  app.route('/transactions/:transactionsId')
    .get(transfer.read_a_transfer)
    .put(transfer.update_a_transfer)
    .delete(transfer.delete_a_transfer);
};
