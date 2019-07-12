let express = require("express");
let URL = require("url");
let cookieParser = require("cookie-parser");

let app = express();
app.use(cookieParser());

app.get("/selecttable", function (req, res) {
    res.write("<h1>Select Times Table</h1><br>");
    for (let i = 1; i <= 10; i++) {
        res.write("<a href='/selectrange/" + i + "'>" + i + "</a><br>");
    }
    res.end();
});

app.get("/selectrange/:cookieVal", function (req, res) {

    res.cookie("Table", req.params.cookieVal);

    res.write("<a href='/selecttable'> Go Back </a><br>");
    res.write("<h1>Select Range</h1><br>");
    res.write("Times Table To Display: " + req.params.cookieVal + "<br>");
    for (let i = 10; i <= 100; i += 10) {
        res.write("<a href='/showresult/" + i + "'>" + i + "</a><br>");
    }
    res.end();
});

app.get("/showresult/:rangeVal", function (req, res) {

    if (req.cookies.Table == undefined) {
        res.redirect("/selecttable");
    }

    else {
        res.write("<a href='/selecttable'> Restart </a><br>");
        res.write("<a href='/selectrange/" + req.cookies.Table + "'> Go Back To Range Selection </a><br>");
        res.write("<h1>The " + req.cookies.Table + " Times Table Is:</h1><br>");
        for (let i = 1; i <= req.params.rangeVal; i++) {
            res.write(req.cookies.Table + " X " + i + " = " + (req.cookies.Table * i) + "<br>");
        }
    }
    res.end();
});

app.get("/reset", function (req, res) {
    res.clearCookie("Table");
    res.redirect("/selecttable");
});

app.listen(8080);