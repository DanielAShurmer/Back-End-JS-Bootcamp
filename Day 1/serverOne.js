let ref = require("http");

let myFunction = function (request, response) {
    console.log("Hey There!");
}

server = ref.createServer(myFunction);
server.listen(8080);