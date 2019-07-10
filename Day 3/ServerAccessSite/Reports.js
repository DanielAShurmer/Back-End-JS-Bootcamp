let dbfcon = require ('./dbconnection');

module.exports = 

function showRecords(Response){
    let con = dbfcon();
    con.query("Select * from Personal", function(error,result){
        if(error){
            console.log("Something Went Wrong!");
            console.log(error);
        }
        else{
            Response.writeHead(200,{'Content-Type':'Text/HTML'});
            Response.write("<a href='./'>Home</a><br>");

            result.forEach(function(record){
                Response.write(""+record.PNo+"<br>");
                Response.write(""+record.Name+"<br>");
                Response.write(""+record.Email+"<br>");
                Response.write(""+record.Telephone+"<br>");
                Response.write(""+record.DepId+"<br>");
            });
            Response.end();
        }
    });
}