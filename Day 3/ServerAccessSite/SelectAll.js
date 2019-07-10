let dbfcon = require('./dbconnection');

module.exports =

    function showRecords(Response, DepName) {
        let con = dbfcon();
        let departmentID = "";
        console.log(DepName);
        if (DepName != "none") {
            con.query("Select * from Departments where Name='" + DepName + "'", function (error, result) {
                if (error) {
                    console.log("Something Went Wrong!");
                    console.log(error);
                }
                else {
                    result.forEach(function (record) {
                        departmentID = record.DepId;
                    });
                }

                con.query("Select * from Personal where DepId=" + departmentID, function (error, result) {
                    if (error) {
                        console.log("Something Went Wrong!");
                        console.log(error);
                    }
                    else {
                        Response.writeHead(200, { 'Content-Type': 'Text/HTML' });
                        Response.write("<a href='./'>Home</a><br>");

                        result.forEach(function (record) {
                            Response.write("" + record.PNo + "<br>");
                            Response.write("" + record.Name + "<br>");
                            Response.write("" + record.Email + "<br>");
                            Response.write("" + record.Telephone + "<br>");
                            Response.write("" + record.DepId + "<br>");
                        });
                        Response.end();
                    }
                });
            });
        }
        else {
            con.query("Select * from Personal", function (error, result) {
                if (error) {
                    console.log("Something Went Wrong!");
                    console.log(error);
                }
                else {
                    Response.writeHead(200, { 'Content-Type': 'Text/HTML' });
                    Response.write("<a href='./'>Home</a><br>");

                    result.forEach(function (record) {
                        Response.write("" + record.PNo + "<br>");
                        Response.write("" + record.Name + "<br>");
                        Response.write("" + record.Email + "<br>");
                        Response.write("" + record.Telephone + "<br>");
                        Response.write("" + record.DepId + "<br>");
                    });
                    Response.end();
                }
            });
        }
    }