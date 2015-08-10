var engine = require('../../node_modules/stats.js');

//missing connect time in line
exports.test_getResponseTime_noConnect = function(test){
	var	line = '2014-01-09T06:16:53.846402+00:00 heroku[router]: at=info method=POST path=/api/online/platforms/facebook_canvas/users/100004180300480/add_ticket host=services.pocketplaylab.com fwd="74.77.234.203" dyno=web.2 service=66ms status=200 bytes=78';
	var responseTime = engine.getResponseTime(line);
	test.equals(responseTime, 66 ,"Response time returned");
	test.done();
};

//missing service time in line
exports.test_getResponseTime_noService = function(test){
	var	line = '2014-01-09T06:16:53.846402+00:00 heroku[router]: at=info method=POST path=/api/online/platforms/facebook_canvas/users/100004180300480/add_ticket host=services.pocketplaylab.com fwd="74.77.234.203" dyno=web.2 connect=1ms status=200 bytes=78';
	var responseTime = engine.getResponseTime(line);
	test.equals(responseTime, 1 ,"Response time returned");
	test.done();
};

//modified times syntax
exports.test_getResponseTime_modifiedSyntax = function(test){
	var	line = '2014-01-09T06:16:53.846402+00:00 heroku[router]: at=info method=POST path=/api/online/platforms/facebook_canvas/users/100004180300480/add_ticket host=services.pocketplaylab.com fwd="74.77.234.203" dyno=web.2 connect=1 service=66ms status=200 bytes=78';
	var responseTime = engine.getResponseTime(line);
	test.equals(responseTime, 66 ,"Response time returned");
	test.done();
};

//passing test
exports.test_getResponseTime_pass = function(test){
	var	line = '2014-01-09T06:16:53.846402+00:00 heroku[router]: at=info method=POST path=/api/online/platforms/facebook_canvas/users/100004180300480/add_ticket host=services.pocketplaylab.com fwd="74.77.234.203" dyno=web.2 connect=1ms service=66ms status=200 bytes=78';
	var responseTime = engine.getResponseTime(line);
	test.equals(responseTime, 67 ,"Response time returned");
	test.done();
};