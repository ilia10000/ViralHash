'use strict';

module.exports = function( app, io ) {
	
	app.get('/test', function (req, res) {

		require('../utils/sockets.js')(io);

		
		

  		return "hello world";
	});

}

