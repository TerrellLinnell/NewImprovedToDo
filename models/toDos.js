var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
  name: String,
  date: Number,
});


module.exports = mongoose.model('ToDo', ToDoSchema);
