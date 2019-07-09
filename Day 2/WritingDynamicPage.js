let HTP = require("http");

let myFunct = function(Req,Res){
    Res.writeHead(200,{'content-type':'Text/HTML'});
    Res.write("<HTML>");
    Res.write("<Center>");
    Res.write("<B>Welcome To</B><br>");
    Res.write("<h1>Nationwide</h1>");
    Res.write("</HTML>");
    Res.end();
}

let server = HTP.createServer(myFunct);
server.listen(8080);