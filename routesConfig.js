"use strict";

module.exports = function(app) {

	//***** Route Files *****//
	var mainRoute = require('./routes/main');
	var courseRoute = require('./routes/course');


	//***** MAIN ROUTES *****//
	app.get('/', mainRoute.index);


	//***** COURSE ROUTES *****//
	app.get('/course', courseRoute.index);
	app.get('/resources', courseRoute.resources);
	app.get('/code', courseRoute.code);

};

