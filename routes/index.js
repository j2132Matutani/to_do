const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const pg = require('pg');

const connection = new pg.Pool({
  host: 'localhost',
  user: 'root',
  password: 'postgres',
  database: 'todo_app',
  port: 5432,
  });

  /*新版 */
  router.get('/', function (req, res, next) {
    knex("tasks")
      .select("*")
      .then(function (results) {
        console.log(results);
        res.render('index', {
          title: 'ToDo App',
          todos: results,
        });
      })
      .catch(function (err) {
        console.error(err);
        res.render('index', {
          title: 'ToDo App',
        });
      });
  });
  
  /*  旧版
  router.get('/', function (req, res, next) {
    connection.query(
      `select * from tasks;`,
      (error, results) => {
        console.log(error);
        console.log(results.rows);
        res.render('index', {
          title: 'ToDo App',
          todos: results.rows,
        });
      }
    );
  });
   */

  router.post('/', function (req, res, next) {
    const todo = req.body.add;
    knex("tasks")
      .insert({user_id: 1, content: todo})
      .then(function () {
        res.redirect('/')
      })
      .catch(function (err) {
        console.error(err);
        res.render('index', {
          title: 'ToDo App',
        });
      });
  });

  
router.use('/signup',require('./signup'));


module.exports = router;