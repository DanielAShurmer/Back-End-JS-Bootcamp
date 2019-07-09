let HTP = require("http");
let URL = require("url");

let myFunction = function (request, response) {
    let data = URL.parse(request.url,true);
    let Num1 = parseInt(data.query.Num1);
    let Num2 = parseInt(data.query.Num2);

    if (data.pathname == "/") { console.log("Homepage"); }
    else if (data.pathname == "/inbox") { console.log("Inbox"); }
    else if (data.pathname == "/login") { console.log("Login"); }
    else if (data.pathname == "/add") { 
        console.log("Add");
        console.log("Result: " + (Num1 + Num2));
    }
    else if (data.pathname == "/sub") { 
        console.log("Sub");
        console.log("Result: " + (Num1 - Num2));
    }
    else { console.log("Page Not Found"); }
}

server = HTP.createServer(myFunction);
server.listen(8080); 