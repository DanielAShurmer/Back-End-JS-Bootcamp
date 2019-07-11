let dbfcon = require('./dbconnection');

module.exports =

    function showRecords(Response) {
        let con = dbfcon();

        con.query("Select * from Departments", function (error, result) {
            if (error) {
                console.log("Something Went Wrong!");
                console.log(error);
            }
            else {
                Response.writeHead(200, { 'Content-Type': 'Text/HTML' });
                Response.write("<a href='./'>Home</a><br>");

                result.forEach(function (record) {

                    departmentName = record.Name;
                    if (departmentName == "R&D"){
                        departmentName = "RandD"
                    }

                    Response.write("<a href='./department?Dep=" + departmentName + "'>" + record.Name + "</a><br>");
                });
                Response.end();
            }
        });
    }
