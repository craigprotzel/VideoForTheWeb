
"use strict";

module.exports = {

	index: function(req, res){
		res.render('Course/index.html',
			{title:'Video For The Web'}
		);
	}
};