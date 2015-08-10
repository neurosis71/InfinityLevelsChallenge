var engine = require('../../node_modules/stats.js');

//string in array
exports.test_getAverageTime_string = function(test){
	var	times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "test"];
	var time = engine.getAverageTime(times);
	test.equals(time, 5.5 ,"Returned " + time);
	test.done();
};

//pass
exports.test_getAverageTime_pass = function(test){
	var	times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var time = engine.getAverageTime(times);
	test.equals(time, 5.5 ,"Returned " + time);
	test.done();
};