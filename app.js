var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var updateLocationAPIRouter = require('./routes/updateLocationAPI');
var updateSkillAPIRouter = require('./routes/updateSkillAPI');
var retrieveSkillAPIRouter = require('./routes/retrieveSkillAPI');
var retrieveLocationAPIRouter = require('./routes/retrieveLocationAPI');
var checkUsernameAPIRouter = require('./routes/checkUsernameAPI');
var registerAPIRouter = require('./routes/registerAPI');
var authenticationAPIRouter = require('./routes/authenticationAPI');
// var uploadAPIRouter = require('./routes/uploadAPI');
var searchJobAPIRouter = require('./routes/searchJobAPI');


const fileUpload = require('express-fileupload');
var db = require('./dbConfig');

var app = express();

db.connectDB();
// db.createCollection();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(fileUpload());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/updateLocationAPI', updateLocationAPIRouter);
app.use('/updateSkillAPI', updateSkillAPIRouter);
app.use('/retrieveSkillAPI', retrieveSkillAPIRouter);
app.use('/retrieveLocationAPI', retrieveLocationAPIRouter);
app.use('/checkUsernameAPI', checkUsernameAPIRouter);
app.use('/registerAPI', registerAPIRouter);
app.use('/authenticationAPI', authenticationAPIRouter);
// app.use('/uploadAPI', uploadAPIRouter);
app.use('/searchJobAPI', searchJobAPIRouter);


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
