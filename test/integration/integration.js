var engine = require('../../index.js');

var processorData = {"cpm" : {"searchFor" : "count_pending_messages", "count" : 0, "timeResponses" : [], "dynos" : []}};
var logPath = "./test/integration/sample.log";

//missing dyno in line
exports.test_integration = function(test){
	var result = engine.init(logPath);
	test.ok(result, "Success");
	test.done();
};