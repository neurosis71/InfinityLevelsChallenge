var engine = require('../../node_modules/stats.js');

//pass one int result
exports.test_getMode_oneInt = function(test){
	var	list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
	var result = engine.getMode(list);
	test.equals(result, 1 ,"Returned " + result);
	test.done();
};

//pass two int result
exports.test_getMode_twoInt = function(test){
	var	list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2];
	var result = engine.getMode(list);
	test.equals(result[0], 1 ,"Returned " + typeof result);
	test.done();
};

//pass one string result
exports.test_getMode_oneString = function(test){
	var	list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "1"];
	var result = engine.getMode(list);
	test.equals(result, "1" ,"Returned " + result);
	test.done();
};

//pass two string result
exports.test_getMode_twoString = function(test){
	var	list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "1", "2"];
	var result = engine.getMode(list);
	test.equals(result[0], "1" ,"Returned " + typeof result);
	test.done();
};