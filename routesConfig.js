"use strict";

module.exports = function(app) {

	//***** Route Files *****//
	var mainRoute = require('./routes/main');
	var courseRoute = require('./routes/course');


	//***** MAIN ROUTES *****//
	app.get('/', mainRoute.index);


	//***** COURSE ROUTES *****//
	app.get('/classes', courseRoute.index);
	app.get('/assignments', courseRoute.assignments);
	app.get('/code', courseRoute.code);
	app.get('/resources', courseRoute.resources);
};

