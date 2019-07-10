let HTTP = require("http");
let URL = require("url");
let fileSys = require("fs");
let DisplayRecords = require("./Reports")


let mapping = function indexRequest(req, res) {
    let location = URL.parse(req.url).pathname;
    console.log(location);
    if (location == "/") {
        fileSys.readFile('./Home.html', function (error, data) {
            if (error) {
                res.writeHead(200, { 'Content-Type': 'Text/HTML' });
                res.writeHead(404);
                res.write("404 - File Not Found");
                res.end();
            }
            else {
                res.write(data);
                res.end();
            }
        });
    }

    if (location == "/showAll") {
        DisplayRecords(res);
    }
}

let server = HTTP.createServer(mapping);
server.listen(8080);