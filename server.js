var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Transactions = require('./api/models/transfer-app.model'),
  bodyParser = require('body-parser');

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:8100',
  credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://mayurikarnik:mayuri123@cluster0.9frvga1.mongodb.net/?retryWrites=true&w=majority', function (err) {
  if (err) throw err;
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/transfer-app.route');
routes(app);

app.listen(port);

console.log('Transfer App RESTful API server started on: ' + port);
