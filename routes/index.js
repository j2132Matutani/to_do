const express = require('express');
const router = express.Router();

const mysql = require('pg');

const connection = new pg.Pool({
  host: 'localhost',
  user: 'root',
  password: 'postgres',
  database: 'todo_app',
  port: 5432,
  });  




let todos = [];

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'ToDo App',
    todos: todos,
  });
});

router.post('/', function (req, res, next) {
  const todo = req.body.add;
  todos.push(todo);
  res.redirect('/');
});


module.exports = router;