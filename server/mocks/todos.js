module.exports = function(app) {
  var express = require('express');
  var todosRouter = express.Router();
  todosRouter.get('/', function(req, res) {
    res.send({"todos":[
 {
   id: 1,
   title: 'Learn Ember.js',
   isCompleted: true
 },
 {
   id: 2,
   title: '...',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Profit!',
   isCompleted: false
 }
]});
  });
  app.use('/api/todos', todosRouter);
};
