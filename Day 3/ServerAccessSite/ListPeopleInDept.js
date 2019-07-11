let dbfcon = require('./dbconnection');

module.exports =

    function showRecords(Response, DepName) {
        let con = dbfcon();
        let departmentID = "";
        console.log(DepName);

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
                    Response.write("<a href='./listDeparts'>Back</a><br>");
                    Response.write("<span>Name            </span>");
                    Response.write("<span>Operations</span>");
                    Response.write("<br>");

                    result.forEach(function (record) {
                        Response.write("" + record.Name);
                        Response.write("<a href='./delete?rec=" + record.PNo + "'>Delete</a>");
                        Response.write("<a href='./update?rec=" + record.PNo + "'>Update</a>");
                        Response.write("<br>");
                    });
                    Response.end();
                }
            });
        })
    }
