let ref = require("http");

let myFunction = function (request, response) {
    let url = request.url;
    if (url == "/") { console.log("Homepage"); }
    else if (url == "/inbox") { console.log("Inbox"); }
    else if (url == "/login") { console.log("Login"); }
    else { console.log("Page Not Found"); }
}

server = ref.createServer(myFunction);
server.listen(8080); 