var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Transactions = require('./api/models/transfer-app.model'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://root:password@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass/transfer-app', function(err) {
    if (err) throw err;
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/transfer-app.route');
routes(app);

app.listen(port);

console.log('Transfer App RESTful API server started on: ' + port);
