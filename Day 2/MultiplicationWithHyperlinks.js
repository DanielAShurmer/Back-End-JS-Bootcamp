let HTP = require("http");
let URL = require("url");

let mapping = function (req, res) {
    let location = URL.parse(req.url, true).pathname;
    res.writeHead(200, { 'content-type': 'Text/HTML' });
    res.write("<HTML>");
    res.write("<Center>");
    if (location == "/") {
        res.write("<h1>Select Times Table</h1><br>");
        for (let i = 1; i <= 10; i++){
            res.write("<a href='second?No1=" + i + "'>" + i + "</a><br>");
        }
    }
    if (location == "/second") {
        let FirstNum = URL.parse(req.url, true).query.No1;
        res.write("<a href='/'> Go Back </a><br>");
        res.write("<h1>Select Range</h1><br>");
        res.write("Times Table To Display: " + FirstNum + "<br>");
        for (let i = 10; i <= 100; i+=10){
            res.write("<a href='result?No1=" + FirstNum + "&No2= " + i + "'>" + i + "</a><br>");
        }
    }
    if (location == "/result") {
        let FirstNum = URL.parse(req.url,true).query.No1;
        let SecondNum = URL.parse(req.url,true).query.No2;
        res.write("<a href='/'> Restart </a><br>");
        res.write("<a href='second?No1=" + FirstNum + "'> Go Back To Range Selection </a><br>");
        res.write("<h1>The " + FirstNum + " Times Table Is:</h1><br>");
        for (let i = 1; i <= SecondNum; i++){
            res.write(FirstNum + " X " + i + " = " + (FirstNum * i) + "<br>"); 
        }
    }
    res.write("</HTML>");
    res.end();
}

let server = HTP.createServer(mapping);
server.listen(8080);