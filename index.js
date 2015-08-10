/********** required modules *************/
var processor = require('logProcessor');
var EventEmitter = require('events').EventEmitter;
var stats = require('stats');

/********** initialization ***************/

// Object to pass through the processing and reports function to store data
processorData = {
	"cpm" : {"searchFor" : "count_pending_messages", "count" : 0, "timeResponses" : [], "dynos" : []},// for GET /api/users/{user_id}/count_pending_messages
	"gm" : {"searchFor" : "get_messages", "count" : 0, "timeResponses" : [], "dynos" : []},//for GET /api/users/{user_id}/get_messages
	"gfp" : {"searchFor" : "get_friends_progress", "count" : 0, "timeResponses" : [], "dynos" : []},//for GET /api/users/{user_id}/get_friends_progress
	"gfs" : {"searchFor" : "get_friends_score", "count" : 0, "timeResponses" : [], "dynos" : []},//for GET /api/users/{user_id}/get_friends_score
	"pusers" : {"searchFor" : "/api/users", "searchFor2" : "method=POST", "count" : 0, "timeResponses" : [], "dynos" : []},//for POST /api/users/{user_id}
	"gusers" : {"searchFor" : "/api/users", "searchFor2" : "method=GET", "count" : 0, "timeResponses" : [], "dynos" : []} //for GET /api/users/{user_id}
	};

//var for event management in logProcessor
var processorEvent = new EventEmitter();


var init = function(logPath){
	processor.processFile(processorEvent, processorData, logPath);
	
	processorEvent.on('DoneProcess', function(message){
		stats.reportStats(processorData);	
	});	
	
	return true;
}

/*********** processing ***************/

init();


//for tests
exports.init = init;