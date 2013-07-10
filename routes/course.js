"use strict";

module.exports = {

	index: function(req, res){
		res.render('Course/index.html',
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
	}

};