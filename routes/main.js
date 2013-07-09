"use strict";

module.exports = {

	index: function(req, res){
		res.render('Main/index.html',
			{title:'Video For The Web'}
		);
	}
};