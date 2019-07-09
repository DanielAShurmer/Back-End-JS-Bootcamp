let HTP = require("http");
let URL = require("url");

let mapping = function (req, res) {
    let location = URL.parse(req.url, true).pathname;
    if (location == "/") {
        res.writeHead(200, { 'content-type': 'Text/HTML' });
        res.write("<HTML>");
        res.write("<Center>");
        res.write("<B>Welcome To</B><br>");
        res.write("<h1>Nationwide</h1><br>");
        res.write("<a href='http://localhost:8080/About'>About Page</a><br>");
        res.write("<a href='http://localhost:8080/Login'>Login Page</a>");
        res.write("</HTML>");
        res.end();
    }
    if (location == "/About") {
        res.writeHead(200, { 'content-type': 'Text/HTML' });
        res.write("<HTML>");
        res.write("<Center>");
        res.write("<B>This is the About page.</B><br>");
        res.write("<a href='http://localhost:8080'>Home Page</a><br>");
        res.write("<a href='http://localhost:8080/Login'>Login Page</a>");
        res.write("</HTML>");
        res.end();
    }
    if (location == "/Login") {
        res.writeHead(200, { 'content-type': 'Text/HTML' });
        res.write("<HTML>");
        res.write("<Center>");
        res.write("<B>This is the Login page.</B><br>");
        res.write("<a href='http://localhost:8080'>Home Page</a><br>");
        res.write("<a href='http://localhost:8080/About'>About Page</a>");
        res.write("</HTML>");
        res.end();
    }
}

let server = HTP.createServer(mapping);
server.listen(8080);