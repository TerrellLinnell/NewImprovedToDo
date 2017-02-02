var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
  name: String,
  date: String,
});


module.exports = mongoose.model('ToDo', ToDoSchema);
