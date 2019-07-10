let fileSystem = require("fs");

let readable = fileSystem.createReadStream('./File.txt');
let count = 0;
readable.on('data',function(XYZ){
    count += 1;
    console.log("Buffer Filled " + count);
});

readable.on('end',function(){
    console.log("Data Streaming From File Completed!");
});