var engine = require('../../node_modules/stats.js');

//string in array
exports.test_getMedianTime_string = function(test){
	var	times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "test"];
	var time = engine.getMedianTime(times);
	test.equals(time, 5.5 ,"Returned " + time);
	test.done();
};

//pass even
exports.test_getMedianTime_passEven = function(test){
	var	times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var time = engine.getMedianTime(times);
	test.equals(time, 5.5 ,"Returned " + time);
	test.done();
};

//pass odd
exports.test_getMedianTime_passOdd = function(test){
	var	times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	var time = engine.getMedianTime(times);
	test.equals(time, 6 ,"Returned " + time);
	test.done();
};