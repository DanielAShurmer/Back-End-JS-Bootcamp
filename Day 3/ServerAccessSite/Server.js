let HTTP = require("http");
let URL = require("url");
let fileSys = require("fs");
let DisplayAllRecords = require("./SelectAll");
let ListDepartments = require("./ListDepartments");
let dbfcon = require ('./dbconnection');
let querystring = require("querystring");
//let sql = require("mysql");

let mapping = function indexRequest(req, res) {
    let location = URL.parse(req.url).pathname;
    console.log(location);

    if (location == "/") {
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

    if (location == "/insertrecord"){
        let data = "";
        let record = "";

        req.on("data",function(chunk){
            data+=chunk;
        });

        req.on("end",function(){
            console.log(data);
            record = querystring.parse(data);
            var sql = `insert into personal values(${record.PNo},'${record.Name}','${record.Email}',
                ${record.Telephone},${record.DepId})`;

            let con = dbfcon();

            con.query(sql,function(error,result){
                if (error){
                    console.log("Something Went Wrong!");
                    console.log(error);
                }
                else{
                    console.log(result);
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
            });
        });
    }

    if (location == "/listDeparts") {
        ListDepartments(res);
    }

    if (location == "/department") {
        
    }

}

let server = HTTP.createServer(mapping);
server.listen(8080);