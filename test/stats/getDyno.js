var engine = require('../../node_modules/stats.js');

//missing dyno in line
exports.test_getDyno_noDyno = function(test){
	var	line = '2014-01-09T06:16:53.846402+00:00 heroku[router]: at=info method=POST path=/api/online/platforms/facebook_canvas/users/100004180300480/add_ticket host=services.pocketplaylab.com fwd="74.77.234.203" connect=1ms service=66ms status=200 bytes=78';
	var dyno = engine.getDyno(line);
	test.equals(dyno, null ,"Returned " + dyno);
	test.done();
};

//modified dyno syntax
exports.test_getDyno_modifiedSyntax = function(test){
	var	line = '2014-01-09T06:16:53.846402+00:00 heroku[router]: at=info method=POST path=/api/online/platforms/facebook_canvas/users/100004180300480/add_ticket host=services.pocketplaylab.com fwd="74.77.234.203" dyno:web.2 connect=1 service=66ms status=200 bytes=78';
	var dyno = engine.getDyno(line);
	test.equals(dyno, "dyno:web.2" ,"Returned " + dyno);
	test.done();
};

//passing test
exports.test_getDyno_pass = function(test){
	var	line = '2014-01-09T06:16:53.846402+00:00 heroku[router]: at=info method=POST path=/api/online/platforms/facebook_canvas/users/100004180300480/add_ticket host=services.pocketplaylab.com fwd="74.77.234.203" dyno=web.2 connect=1ms service=66ms status=200 bytes=78';
	var dyno = engine.getDyno(line);
	test.equals(dyno, "web.2" ,"Returned " + dyno);
	test.done();
};