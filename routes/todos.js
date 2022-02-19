const route = require('express').Router()

let todoList = []
route.get('/',function(req,res){
   res.send(todoList)
})
route.post('/',function(req,res){
   todoList.push({
       task: req.body.task
   })
   res.send(todoList)
})
module.exports = route