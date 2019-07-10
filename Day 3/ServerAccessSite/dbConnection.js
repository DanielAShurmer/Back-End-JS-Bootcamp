let mySQL = require("mysql");

module.exports=function connection(){
    let con = mySQL.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"nationwide"
    });

    con.connect(function(error) {
        if(error){
            console.log("Something Went Wrong!");
            console.log(error);
        }
        else{
            console.log("Connection Successful!");
        }
    });
    return con;
}