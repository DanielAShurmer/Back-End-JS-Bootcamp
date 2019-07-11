let HTTP = require("http");
let URL = require("url");
let fileSys = require("fs");
let DisplayAllRecords = require("./SelectAll");
let ListDepartments = require("./ListDepartments");
let dbfcon = require('./dbconnection');
let DisplayInDept = require('./ListPeopleInDept');
let querystring = require("querystring");
//let sql = require("mysql");

function insertNewRecord(record, con, res) {
    let sql = `insert into personal values(${record.PNo},'${record.Name}','${record.Email}',
    ${record.Telephone},${record.DepId})`;

    con.query(sql, function (error, result) {
        if (error) {
            console.log("Something Went Wrong!");
            console.log(error);
        }
        else {
            console.log(result);
            displayHomepage(res);
        }
    });
}

function displayHomepage(res) {
    fileSys.readFile('./Home.html', function (error, data) {
        if (error) {
            res.writeHead(200, { 'Content-Type': 'Text/HTML' });
            res.writeHead(404);
            res.write("404 - File Not Found");
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    });
}

let mapping = function indexRequest(req, res) {
    let location = URL.parse(req.url).pathname;
    console.log(location);

    if (location == "/") {
        displayHomepage(res);
    }

    if (location == "/enterNew") {
        fileSys.readFile('./EntryForm.html', function (error, data) {
            if (error) {
                res.writeHead(200, { 'Content-Type': 'Text/HTML' });
                res.writeHead(404);
                res.write("404 - File Not Found");
                res.end();
            }
            else {
                res.write(data);
                res.end();
            }
        });
    }

    if (location == "/showAll") {
        let department = "";
        department = URL.parse(req.url, true).query.Dep;
        if (department == 'RandD') { department = 'R&D'; }
        console.log("DepartmentName: " + department);
        DisplayAllRecords(res, department);
    }

    if (location == "/insertrecord") {
        let data = "";
        let record = "";

        req.on("data", function (chunk) {
            data += chunk;
        });

        req.on("end", function () {
            console.log(data);
            record = querystring.parse(data);

            let sql = `select * from personal where PNo=${record.PNo}`;
            let con = dbfcon();

            con.query(sql, function (error, result) {
                if (error) {
                    console.log("Something Went Wrong!");
                    console.log(error);
                }
                else {
                    console.log(result);
                    if (result.length != 0) {
                        console.log("Existing Results");
                        sql = `delete from personal where PNo=${record.PNo}`;

                        con.query(sql, function (error, result) {
                            if (error) {
                                console.log("Something Went Wrong!");
                                console.log(error);
                            }
                            else {
                                console.log("Record Deleted");
                                console.log(result);
                                insertNewRecord(record,con,res);
                            }
                        });
                    }
                    else {
                        console.log("No Existing Results");
                        insertNewRecord(record,con,res);
                    }
                }
            });
        });
    }

    if (location == "/listDeparts") {
        ListDepartments(res);
    }

    if (location == "/department") {
        let department = "";
        department = URL.parse(req.url, true).query.Dep;
        if (department == 'RandD') { department = 'R&D'; }
        console.log("DepartmentName: " + department);
        DisplayInDept(res, department);
    }

    if (location == "/delete") {
        let PNo = 0;
        PNo = parseInt(URL.parse(req.url, true).query.rec);
        if (PNo != 0) {
            let sql = `delete from personal where PNo=${PNo}`;

            let con = dbfcon();

            con.query(sql, function (error, result) {
                if (error) {
                    console.log("Something Went Wrong!");
                    console.log(error);
                }
                else {
                    console.log("Record Deleted");
                    console.log(result);
                }
            });
        }

        displayHomepage(res);
    }

    if (location == "/update") {
        let PNo = 0;
        PNo = parseInt(URL.parse(req.url, true).query.rec);
        if (PNo != 0) {
            let sql = `select * from personal where PNo=${PNo}`;
            let con = dbfcon();

            con.query(sql, function (error, result) {
                if (error) {
                    console.log("Something Went Wrong!");
                    console.log(error);
                }
                else {
                    res.writeHead(200, { 'Content-Type': 'Text/HTML' });
                    res.write("<a href='./'>Home</a><br>");
                    result.forEach(function (record) {
                        res.write("<form action = '/insertrecord' method='POST'>");
                        res.write("<input type='text' name='PNo' value='" + record.PNo + "'>");
                        res.write("<input type='text' name='Name' value='" + record.Name + "'>");
                        res.write("<input type='text' name='Email' value='" + record.Email + "'>");
                        res.write("<input type='text' name='Telephone' value='" + record.Telephone + "'>");
                        res.write("<input type='text' name='DepId' value='" + record.DepId + "'>");
                        res.write("<input type='submit' name='Submit'>");
                        res.write("</form>");
                    });
                    res.end();
                }
            });
        }
        else {
            displayHomepage(res);
        }
    }
}

let server = HTTP.createServer(mapping);
server.listen(8080);