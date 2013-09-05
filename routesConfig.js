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


	//***** STUDENT PAGES *****//

	//Trailer Mashups
	app.get('/assignments/trailermashup/benjamin_rosenbaum', courseRoute.assignments_trailermahup_benjamin);
	app.get('/assignments/trailermashup/erin_finnegan', courseRoute.assignments_trailermahup_erin);
	app.get('/assignments/trailermashup/lilu_wang', courseRoute.assignments_trailermahup_lilu);

	//How To's
	app.get('/assignments/howto/michael_rothman', courseRoute.assignments_howto_michael);
	app.get('/assignments/howto/westin_wendt', courseRoute.assignments_howto_wes);
	app.get('/assignments/howto/lilu_wang', courseRoute.assignments_howto_lilu);

};

