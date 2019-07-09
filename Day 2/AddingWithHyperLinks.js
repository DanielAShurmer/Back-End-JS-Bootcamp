let HTP = require("http");
let URL = require("url");

let mapping = function (req, res) {
    let location = URL.parse(req.url, true).pathname;
    res.writeHead(200, { 'content-type': 'Text/HTML' });
    res.write("<HTML>");
    res.write("<Center>");
    if (location == "/") {
        res.write("<h1>Select First Value</h1><br>");
        for (let i = 1; i <= 10; i++){
            res.write("<a href='second?No1=" + i + "'>" + i + "</a><br>");
        }
    }
    if (location == "/second") {
        let FirstNum = URL.parse(req.url, true).query.No1;
        res.write("<h1>Select Second Value</h1><br>");
        res.write("The First Value Is " + FirstNum + "<br>");
        for (let i = 1; i <= 10; i++){
            res.write("<a href='result?No1=" + FirstNum + "&No2= " + i + "'>" + i + "</a><br>");
        }
    }
    if (location == "/result") {
        let FirstNum = URL.parse(req.url,true).query.No1;
        let SecondNum = URL.parse(req.url,true).query.No2;
        res.write("<h1>The Result Is " + (parseInt(FirstNum) + parseInt(SecondNum)) + "</h1><br>");
    }
    res.write("</HTML>");
    res.end();
}

let server = HTP.createServer(mapping);
server.listen(8080);