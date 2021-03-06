#!/usr/bin/env node

const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const logger = require('morgan');
const pug = require('pug');
const flash = require('connect-flash');
const passport = require('passport');
const cors = require('cors');
const express = require('express');
require('dotenv').config();

// API Router
const apiRouter = require('./routes/api/api');
// API 외 Back단에서 처리하는 경우 Router
const backRouter = require('./routes/back');

const { sequelize } = require('./models');
const passportConfig = require('./passport');

const app = express();
// sequelize.sync({force:true});
passportConfig(passport);

// view engine setup
app.use(express.static(__dirname + "/views/"));
app.set('view engine', 'pug');

/**
 * Setting up CORS, such that it can work together with an Application at another domain / port
 * Angular port 허용
 */
app.use(cors());

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    maxAge: 60000,
    httpOnly: true,
    secure: false,
  }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use('/api', apiRouter);
app.use('/b', backRouter);

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
  res.render('pug/error');
});

module.exports = app;
