require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const _ = require('lodash');

const passport = require('passport');
const config = require('./config/database');
const mongoose = require('mongoose');

mongoose.connect(config.database, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set('useFindAndModify', false);
const indexRouter = require('./routes/index');
const contactRouter = require('./routes/contact');
const loginRouter = require('./routes/login');

const apiSignup = require('./api/routes/signup.route')
const apiLogin = require('./api/routes/login.route')
const apiNewsRouter = require('./api/routes/news.route')
const apiProjectsRouter = require('./api/routes/projects.route')
const apiHdctRouter = require('./api/routes/hd-ct.route')
const apiActivityRouter = require('./api/routes/activity.route')
const apiPartner = require('./api/routes/partner.route')
const apiContact = require('./api/routes/contact.route')

// var sessionId = require('./middlewares/session.middleware')
const authToken = require('./middlewares/auth.middleware');
var app = express();

app.use(fileUpload({
  createParentPath: true,
  limits: {
    fileSize: 2 * 1024 * 1024 * 1024 //2MB max file(s) size
  },
}));

app.all('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});

app.use(cors());
app.use(passport.initialize());
app.use(cookieParser(process.env.SESSION_SECRET))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.static('uploads'));
app.use('/', indexRouter);
app.use('/contacts', contactRouter);
app.use('/login', loginRouter);

app.use('/api/signup', apiSignup);
app.use('/api/login', apiLogin);
app.use('/api/news', apiNewsRouter);
app.use('/api/projects', authToken.checkToken, authToken.protectedRoute, apiProjectsRouter);
app.use('/api/hdct', apiHdctRouter);
app.use('/api/activity', apiActivityRouter);
app.use('/api/partner', apiPartner);
app.use('/api/contact', apiContact);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
