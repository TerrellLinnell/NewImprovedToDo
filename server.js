var express = require('express');//imports express package
var app = express();//starts express server
var toDos = require('./models/toDos');//imports file models.todo
var mongoose = require('mongoose');// imports mongoose package
var toDoRoutes = require('./routes/toDoRoutes');// imports routes directory and file
var bodyParser = require('body-parser');// imports body parser package

mongoose.connect("mongodb://localhost/Todos");//connects mongoose to mongodb
app.use(bodyParser.json());//reads req.body
app.use(bodyParser.urlencoded({extended: true}));//reads req.body

app.use('/api/toDos', toDoRoutes);//uses route at api/ "/"





app.listen(3000, function () {     //says webpage will run on port 3000 and do the function on start
  console.log('Express server is up and running on port 3000')
});
