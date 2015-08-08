//required modules
var fs = require('fs');


//initialization
var stream = fs.createReadStream('resources/sample.log', {flags: 'r', encoding: 'utf-8'});
var buf = '';


//processing
stream.on('data', function(d) {
    buf += d.toString(); // when data is read, stash it in a string buffer
    pump(); // then process the buffer
});



/*********** Helper functions ***************/

//verifies we don't have an empty line in  the buffer, if not process it
function pump() {
    var pos;

    while ((pos = buf.indexOf('\n')) >= 0) { // keep going while there's a newline somewhere in the buffer
        if (pos == 0) { // if there's more than one newline in a row, the buffer will now start with a newline
            buf = buf.slice(1); // discard it
            continue; // so that the next iteration will start with data
        }
        process(buf.slice(0,pos)); // hand off the line
        buf = buf.slice(pos+1); // and slice the processed data off the buffer
    }
}


//process the line in the buffer to create the stats
function process(line) { // here's where we do something with a line

    if (line[line.length-1] == '\r') line=line.substr(0,line.length-1); // discard CR (0x0D)

    if (line.length > 0) { // ignore empty lines
        console.log(line); 
    }
}