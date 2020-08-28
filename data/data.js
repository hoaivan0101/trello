const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/trello', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const job1 = new Schema({
  title: String,
  date: String,
  status: String,
});

const listjob1 = mongoose.model('lists', job1);
module.exports = listjob1;
