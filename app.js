// "use strict";

/***** Module Dependencies ******/
var express = require('express'),
  partials = require('express-partials'),
  ejs = require('ejs'),
  http = require('http'),
  url = require('url'),
  path = require('path'),
  prettyjson = require('prettyjson'),
  util = require('util');


/***** .env Variables *****/
var sessionSecret = process.env.SUPERSECRET;


/***** Declare App *****/
var app = module.exports = express();
global.app = app;


app.configure(function(){
  app.set('port', process.env.PORT || 3000);

  app.use(partials());
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.set('view options',{layout:true});
  app.engine('html',require('ejs').renderFile);

  app.use(express.favicon("public/images/vftw.ico"));

  app.use(express.bodyParser());
  app.use(express.methodOverride());

  app.use(express.cookieParser('sessionSecret'));
  app.use(express.session());

  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));

  app.use(express.logger('dev'));
  app.use(express.errorHandler());
});


app.configure('development', function(){

});

//ROUTES
require('./routesConfig')(app);
console.log("RUNNING!!!");


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});