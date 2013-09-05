"use strict";

module.exports = {

	index: function(req, res){
		res.render('Course/index.html',
			{title:'Video For The Web'}
		);
	},

	assignments: function(req, res){
		res.render('Course/assignments.html',
			{title:'Video For The Web'}
		);
	},

	code: function(req, res){
		res.render('Course/code.html',
			{title:'Video For The Web'}
		);
	},

	resources: function(req, res){
		res.render('Course/resources.html',
			{title:'Video For The Web'}
		);
	},


	//***** STUDENT PAGES *****//

	//Trailer Mashups
	assignments_trailermahup_benjamin: function(req, res){
		res.render('Course/trailermashup/benjamin_rosenbaum/index.html',
			{title:'Finding Nemo'}
		);
	},

	assignments_trailermahup_erin: function(req, res){
		res.render('Course/trailermashup/erin_finnegan/index.html',
			{title:'Grinding Nemo'}
		);
	},

	assignments_trailermahup_lilu: function(req, res){
		res.render('Course/trailermashup/lilu_wang/index.html',
			{title:'Chasing Nemo'}
		);
	},

	//How Tos
	assignments_howto_michael: function(req, res){
		res.render('Course/howto/michael_rothman/index.html',
			{title:'Bake In The Bedroom'}
		);
	},

	assignments_howto_wes: function(req, res){
		res.render('Course/howto/westin_wendt/index.html',
			{title:'Wonderwall'}
		);
	},

	assignments_howto_lilu: function(req, res){
		res.render('Course/howto/lilu_wang/index.html',
			{title:'Matcha'}
		);
	}

};