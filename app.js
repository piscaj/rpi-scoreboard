var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var setDigitRouter = require('./routes/setDigit');
var testDigitRouter = require('./routes/testDigit');
var setDigitHomeRouter = require('./routes/setDigitHome');
var setDigitAwayRouter = require('./routes/setDigitAway');
var setDigitInningRouter = require('./routes/setDigitInning');

var app = express();

// view engine setup
// Not something to keep
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/setDigit',setDigitRouter);
app.use('/testDigit',testDigitRouter);
app.use('/setDigitHome',setDigitHomeRouter);
app.use('/setDigitAway',setDigitAwayRouter);
app.use('/setDigitInning',setDigitInningRouter);

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
