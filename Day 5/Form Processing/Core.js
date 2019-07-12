let express = require("express");
let app = express();
let bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.get("/form",function(req,res){
    res.sendFile(__dirname+"/entryForm.html");
});

app.post("/form",function(req,res){
    console.log(req.body);
    let name = req.body.Name;
    let marks = req.body.Marks;
    res.write("Name: " + name + "<br>");
    res.write("Marks: " + marks);
    res.end();
});

app.listen(8080);