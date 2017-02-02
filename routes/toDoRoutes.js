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


router.route('/:todo_id')
  .get(function(req, res){
    ToDo.findById(req.params.todo_id, function(err, toDoData){
      if (err) {
        console.log("error finding toDo");
      } else {
        res.json(toDoData);
      }
    })
  })
  .put(function(req, res){
    ToDo.findById(req.params.todo_id, function(err, toDoData){
      if (err) {
        console.log("error finding a specific ToDo!!!!");
      } else {
        toDoData.name = req.body.name ? req.body.name : toDoData.name;
        toDoData.date = req.body.date ? req.body.date : toDoData.date;

        toDoData.save(function(e, updatedToDo){
          if (e) {
            console.log("error with updated todo");
          } else {
            res.json(updatedToDo)
          }
        });
      }
    });
  })
  .delete(function(req,res){
    ToDo.remove({ _id: req.params.todo_id}, function(err, t){
      if (err) {
        console.log(err, "Could not delete todo!!!");
      } else {
        res.json({message: "ToDo Deleted."})
      }
    });
  });




module.exports = router;
