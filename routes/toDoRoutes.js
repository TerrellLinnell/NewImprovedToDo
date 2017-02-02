var express = require('express');//imports express package
var router = new express.Router();//creates a new router
var ToDo = require('../models/toDos');//gives access to toDos.js files in models directory

router.route('/')//creates a new route at /api
  .get(function(req, res){
      ToDo.find(function(err, data){
        if(err){
          console.log("error finding todos");
        }
        else{
          res.json(data);
        }
      })
  })
  .post(function(req, res){
    var toDo = new ToDo({
      name:req.body.name,
      date: req.body.date,
    });
    toDo.save(function(err, toDoData){
      if (err) {
        console.log("error saving ToDo!!");
      } else {
        res.json(toDoData)
      }
    })
  });


// router.route('/api')




module.exports = router;
