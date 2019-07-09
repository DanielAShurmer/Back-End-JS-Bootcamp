let HTP = require("http");
let URL = require("url");

let myFunction = function (request, response) {
    let data = URL.parse(request.url, true);
    let Num1 = parseInt(data.query.Num1);
    let Num2 = parseInt(data.query.Num2);

    if (data.pathname == "/") { response.write("Homepage"); }
    else if (data.pathname == "/inbox") { response.write("Inbox"); }
    else if (data.pathname == "/login") { response.write("Login"); }
    else if (data.pathname == "/add") {
        response.write("Add ");
        response.write("Result: " + (Num1 + Num2));
    }
    else if (data.pathname == "/sub") {
        response.write("Sub ");
        response.write("Result: " + (Num1 - Num2));
    }
    else { response.write("Page Not Found"); }
    response.end();
}

server = HTP.createServer(myFunction);
server.listen(8080); 