var express = require('express');//imports express package
var router = new express.Router();//creates a new router
var ToDo = require('../models/toDos');

router.route('/')//creates a new route at api/ "/"
  .get(function(req, res){//requests data then responds with json information of whatever you put in after res.json
      ToDo.find(function(err, data){
        if(err){
          console.log("error finding todos");
        }
        else{
          res.json(data);
        }
      })

  })
//
//
// router.route('/api')
// })
// app.post('/api/toDos', function(req, res){
//   var toDo = new toDo({
//     name:req.body.name,
//     date:req.body.date,
//   })
//   toDo.save(function(err, toDoData){
//     if (err) {
//       console.log("Error with toDo");
//     }
//     else{
//       res.json(toDoData);
//     }
//   })
// });



module.exports = router;
