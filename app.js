#!/usr/bin/env node

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

// router
var apiRouter = require('./routes/api/api');
var devRouter = require('./routes/dev');

const { sequelize } = require('./models');

var app = express();
sequelize.sync();

// models 의 명세에 맞춰 DB 와 sync 함.
// require('../models/models').sequelize.sync({force: false}).then(() => {
//   console.log("sync success");
// });

// view engine setup
app.use(express.static(__dirname + "/views/"));
// app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use('/api', apiRouter);
app.use('/_dev', devRouter);

app.get("/*", function(req, res) { // Router => Angular (Front-end)
  res.sendFile(path.join(__dirname, "views/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
