let add = require('./AdditionModule.js');
let HTP = require("http");

let mapping = function (req, res) {

    res.writeHead(200, { 'content-type': 'Text/HTML' });
    res.write("<HTML>");
    res.write("<Center>");
    res.write("<B>Welcome To</B><br>");
    res.write("<h1>Nationwide</h1><br>");
    res.write("<p> " + add(15, 25) + "</p>");
    res.write("</HTML>");
    res.end();
}

let server = HTP.createServer(mapping);
server.listen(8080);