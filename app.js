var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));

app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500);
  res.send();
});

app.listen(process.env.PORT || 8080);
module.exports = app;
